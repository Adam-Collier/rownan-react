import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppState } from '../state-context'

let Territories = styled.ul`
  list-style-type: none;
  color: #ffffff;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    border: 1px solid #ffffff;
    width: 22px;
    text-align: center;
    padding: 5px;
    border-radius: 3px;
  }
  .checked {
    background: #ffffff;
    color: #2e3235;
  }
`

let territories = [
  {
    identifier: 'AU',
    url: 'https://www.missguidedau.com'
  },
  {
    identifier: 'DE',
    url: 'https://www.missguided.com/de'
  },
  {
    identifier: 'ES',
    url: 'https://www.missguided.com/es'
  },
  {
    identifier: 'EU',
    url: 'https://www.missguided.eu'
  },
  {
    identifier: 'FR',
    url: 'https://www.missguidedfr.fr'
  },
  {
    identifier: 'IE',
    url: 'https://www.missguided.com/ie'
  },
  {
    identifier: 'PL',
    url: 'https://www.missguided.com/pl'
  },
  {
    identifier: 'UK',
    url: 'https://www.missguided.co.uk/'
  },
  {
    identifier: 'US',
    url: 'https://www.missguidedus.com'
  }
]

const TerritorySelection = () => {
  const dispatch = useAppDispatch()
  const { territory: territoryState } = useAppState()

  const handleChange = (e, url) => {
    dispatch({
      type: 'territory',
      identifier: e.target.value,
      url: e.target.dataset.url
    })
  }

  return (
    <Territories onChange={handleChange}>
      {territories.map((territory, index) => (
        <Fragment key={index}>
          <label
            className={
              territoryState.identifier === territory.identifier
                ? 'checked'
                : ''
            }
            htmlFor={territory.identifier}
          >
            {territory.identifier}
          </label>
          <input
            type="radio"
            name="territory"
            id={territory.identifier}
            value={territory.identifier}
            data-url={territory.url}
          />
        </Fragment>
      ))}
    </Territories>
  )
}

export default TerritorySelection
