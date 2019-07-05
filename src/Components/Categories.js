import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { useAppState, useAppDispatch } from '../state-context'

import { Form } from './styles/Form'
import AutoFillIcon from './AutoFillCategories'

const CategoryForm = styled(Form)`
  padding: 0;
  > div {
    padding: 10px 20px;
  }
  > div:nth-child(even) {
    background-color: #292d2f;
  }
  > div:nth-child(odd) {
    background-color: #2e3235;
  }
  > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
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
  }

  return (
    <Droppable droppableId="categories">
      {provided => (
        <CategoryForm ref={provided.innerRef} {...provided.droppableProps}>
          <section>
            <h3>Categories</h3>
            <AutoFillIcon />
          </section>
          {categories.map((category, index) => (
            <Draggable
              key={index}
              draggableId={`category${index + 1}`}
              index={index}
            >
              {provided => (
                <div
                  key={index}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                >
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
                  <input
                    type="text"
                    name="image"
                    value={category.image}
                    className="image"
                    onChange={e => handleChange(index, e)}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </CategoryForm>
      )}
    </Droppable>
  )
}

export default Categories
