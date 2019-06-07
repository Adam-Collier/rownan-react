import React from 'react'
import { useAppDispatch } from '../state-context'

import { Form } from './styles/Form'

const LowerForm = props => {
  const { index, block } = props
  const dispatch = useAppDispatch()

  const handleChange = e => {
    dispatch({
      type: 'addBlockContent',
      payload: e.target.value,
      name: e.target.name,
      index
    })
    dispatch({ type: 'updateHTML' })
  }

  return (
    <Form>
      <div className="inline">
        <div>
          <label>URL</label>
          <input
            type="text"
            name="url"
            value={block.content.url}
            className="url"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CTA</label>
          <input
            type="text"
            name="cta"
            value={block.content.cta}
            className="cta"
            onChange={handleChange}
          />
        </div>
      </div>
      <label>Image</label>
      <span>../image/upload/q_70</span>
      <input
        type="text"
        name="image"
        value={block.content.image}
        className="image"
        onChange={handleChange}
      />
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={block.content.title}
        className="title"
        onChange={handleChange}
      />
      <label>Subtitle</label>
      <input
        type="text"
        name="subtitle"
        value={block.content.subtitle}
        className="subtitle"
        onChange={handleChange}
      />
    </Form>
  )
}

export default LowerForm
