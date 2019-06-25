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

let territories = ['AU', 'DE', 'ES', 'EU', 'FR', 'IE', 'PL', 'UK', 'US']

const TerritorySelection = () => {
  const dispatch = useAppDispatch()
  const { territory: territoryState } = useAppState()

  const handleChange = e => {
    dispatch({ type: 'territory', payload: e.target.value })
  }

  return (
    <Territories onChange={handleChange}>
      {territories.map((territory, index) => (
        <Fragment key={index}>
          <label
            className={territoryState === territory ? 'checked' : ''}
            htmlFor={territory}
          >
            {territory}
          </label>
          <input
            type="radio"
            name="territory"
            id={territory}
            value={territory}
          />
        </Fragment>
      ))}
    </Territories>
  )
}

export default TerritorySelection
