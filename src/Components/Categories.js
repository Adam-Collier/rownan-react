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
  const { categories } = useAppState()
  const dispatch = useAppDispatch()

  const handleChange = (index, e) => {
    dispatch({
      type: 'addCategoryContent',
      payload: e.target.value,
      name: e.target.name,
      index
    })
    dispatch({ type: 'updateHTML' })
  }

  return (
    <CategoryForm>
      <h3>Categories</h3>
      {categories.map((category, index) => (
        <div key={index}>
          <div className="inline">
            <div>
              <label>URL</label>
              <input
                type="text"
                name="url"
                value={category.url}
                onChange={e => handleChange(index, e)}
              />
            </div>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={category.title}
                onChange={e => handleChange(index, e)}
              />
            </div>
          </div>
          <label>Image</label>
          <span>../image/upload/q_70</span>
          <input
            type="text"
            name="image"
            value={category.image}
            className="image"
            onChange={e => handleChange(index, e)}
          />
        </div>
      ))}
    </CategoryForm>
  )
}

export default Categories
