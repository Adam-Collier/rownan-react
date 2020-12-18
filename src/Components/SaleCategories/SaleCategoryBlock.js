import React from 'react'
import { useAppDispatch } from '../../context/state-context'

const SaleCategoryBlock = ({ block, index }) => {
  const { url, image } = block
  const dispatch = useAppDispatch()

  const handleChange = (index, e) => {
    dispatch({
      type: 'addSaleCategoryContent',
      payload: e.target.value,
      name: e.target.name,
      index
    })
  }

  return (
    <>
      <section className="inline">
        <div>
          <label>URL</label>
          <input
            type="text"
            name="url"
            value={url.trim()}
            onChange={e => handleChange(index, e)}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={image}
            className="image"
            onChange={e => handleChange(index, e)}
          />
        </div>
      </section>
    </>
  )
}

export default SaleCategoryBlock
