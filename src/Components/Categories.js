import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { useAppState, useAppDispatch } from '../state-context'

import { BlockWrapper } from './styles/ContentBlocks'
import { AutoFillCategories } from './AutoFill'

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
        <BlockWrapper ref={provided.innerRef} {...provided.droppableProps}>
          <section>
            <h3>Categories</h3>
            <AutoFillCategories />
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
                  <section className="inline">
                    <div>
                      <label>URL</label>
                      <input
                        type="text"
                        name="url"
                        value={category.url.trim()}
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
                  </section>
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
        </BlockWrapper>
      )}
    </Droppable>
  )
}

export default Categories
