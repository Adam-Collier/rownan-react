import React from 'react'
import { useAppDispatch } from '../../context'

import { BlockForm } from '../styles/ContentBlocks'
import { placeholderImage } from '../../lib/placeholderImage'

const HeroForm = (props) => {
  const { index, block } = props

  const dispatch = useAppDispatch()

  const handleChange = (e) => {
    if (e.target.name === 'image' || e.target.name === 'mobile') {
      e.persist()
      placeholderImage(e.target.value).then((placeholder) => {
        dispatch({
          type: 'placeholderImage',
          name: e.target.name,
          index,
          payload: placeholder,
        })
      })
    }

    dispatch({
      type: 'addDynamicBlockContent',
      payload: e.target.value,
      name: e.target.name,
      index,
    })
  }

  return (
    <BlockForm>
      <section className="inline">
        <div>
          <label>Primary URL</label>
          <input
            type="text"
            name="primaryUrl"
            value={block.content.primaryUrl.trim()}
            className="primary-url"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Secondary URL</label>
          <input
            type="text"
            name="secondaryUrl"
            value={block.content.secondaryUrl.trim()}
            className="secondary-url"
            onChange={handleChange}
          />
        </div>
      </section>
      <label>Image</label>
      <input
        type="text"
        name="image"
        value={block.content.image}
        className="image"
        onChange={handleChange}
      />
      <label>Mobile Image</label>
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
      <section className="inline">
        <div>
          <label>Primary CTA</label>
          <input
            type="text"
            name="primaryCta"
            value={block.content.primaryCta}
            className="primary-cta"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Secondary CTA</label>
          <input
            type="text"
            name="secondaryCta"
            value={block.content.secondaryCta}
            className="secondary-cta"
            onChange={handleChange}
          />
        </div>
      </section>
    </BlockForm>
  )
}

export default HeroForm
