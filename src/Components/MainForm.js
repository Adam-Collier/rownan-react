import React from 'react'
import { useAppDispatch } from '../state-context'

import { Form } from './styles/Form'

const MainForm = props => {
  const { index } = props

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
          <label>PRIMARY URL</label>
          <input
            type="text"
            name="primaryUrl"
            className="primary-url"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>SECONDARY URL</label>
          <input
            type="text"
            name="secondaryUrl"
            className="secondary-url"
            onChange={handleChange}
          />
        </div>
      </div>
      <label>Image</label>
      <span>../image/upload/q_70</span>
      <input
        type="text"
        name="image"
        className="image"
        onChange={handleChange}
      />
      <label>Mobile Image</label>
      <span>../image/upload/q_70</span>
      <input
        type="text"
        name="mobile"
        className="mobile"
        onChange={handleChange}
      />
      <label>SVG</label>
      <input type="text" name="svg" className="svg" onChange={handleChange} />
      <label>Title</label>
      <input
        type="text"
        name="title"
        className="title"
        onChange={handleChange}
      />
      <label>Subtitle</label>
      <input
        type="text"
        name="subtitle"
        className="subtitle"
        onChange={handleChange}
      />
      <div className="inline">
        <div>
          <label>PRIMARY CTA</label>
          <input
            type="text"
            name="primaryCta"
            className="primary-cta"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>SECONDARY CTA</label>
          <input
            type="text"
            name="secondaryCta"
            className="secondary-cta"
            onChange={handleChange}
          />
        </div>
      </div>
    </Form>
  )
}

export default MainForm
