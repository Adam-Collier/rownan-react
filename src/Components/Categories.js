import React from 'react'
import { Form } from './styles/Form'
import { useAppState, useAppDispatch } from '../state-context'
import styled from 'styled-components'

const CategoryForm = styled(Form)`
  padding: 0;
  h3 {
    padding: 0px 20px;
  }
  > div {
    padding: 10px 20px;
  }
  > div:nth-child(even) {
    background-color: #292d2f;
  }
`

const Categories = props => {
  // const { index, block } = props
  const { categories } = useAppState()
  const dispatch = useAppDispatch()

  const handleChange = e => {
    // dispatch({
    //   type: 'addBlockContent',
    //   payload: e.target.value,
    //   name: e.target.name,
    //   index
    // })
    // dispatch({ type: 'updateHTML' })
  }

  return (
    <CategoryForm>
      <h3>Categories</h3>
      {categories.map(category => (
        <div>
          <div className="inline">
            <div>
              <label>URL</label>
              <input
                type="text"
                name="primaryCta"
                // value={block.content.primaryCta}
                className="primary-cta"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="secondaryCta"
                // value={block.content.secondaryCta}
                className="secondary-cta"
                onChange={handleChange}
              />
            </div>
          </div>
          <label>Image</label>
          <span>../image/upload/q_70</span>
          <input
            type="text"
            name="image"
            // value={block.content.image}
            className="image"
            onChange={handleChange}
          />
        </div>
      ))}
    </CategoryForm>
  )
}

export default Categories
