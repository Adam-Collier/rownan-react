import React from 'react'
import { useAppDispatch } from '../state-context'

import { Form } from './styles/Form'
import { placeholderImage } from '../lib/placeholderImage'

const MainForm = props => {
  const { index, block } = props

  const dispatch = useAppDispatch()

  const handleChange = e => {
    if (e.target.name === 'image' || e.target.name === 'mobile') {
      e.persist()
      placeholderImage(e.target.value).then(placeholder => {
        dispatch({
          type: 'placeholderImage',
          name: e.target.name,
          index,
          payload: placeholder
        })
        dispatch({ type: 'updateHTML' })
      })
    }

    dispatch({
      type: 'addBlockContent',
      payload: e.target.value,
      name: e.target.name,
      index
    })
  }

  return (
    <Form>
      <div className="inline">
        <div>
          <label>PRIMARY URL</label>
          <input
            type="text"
            name="primaryUrl"
            value={block.content.primaryUrl}
            className="primary-url"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>SECONDARY URL</label>
          <input
            type="text"
            name="secondaryUrl"
            value={block.content.secondaryUrl}
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
        value={block.content.image}
        className="image"
        onChange={handleChange}
      />
      <label>Mobile Image</label>
      <span>../image/upload/q_70</span>
      <input
        type="text"
        name="mobile"
        value={block.content.mobile}
        className="mobile"
        onChange={handleChange}
      />
      <label>SVG</label>
      <input
        type="text"
        name="svg"
        value={block.content.svg}
        className="svg"
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
      <div className="inline">
        <div>
          <label>PRIMARY CTA</label>
          <input
            type="text"
            name="primaryCta"
            value={block.content.primaryCta}
            className="primary-cta"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>SECONDARY CTA</label>
          <input
            type="text"
            name="secondaryCta"
            value={block.content.secondaryCta}
            className="secondary-cta"
            onChange={handleChange}
          />
        </div>
      </div>
    </Form>
  )
}

export default MainForm
