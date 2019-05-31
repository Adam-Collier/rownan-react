import React from 'react'

import { Form } from './styles/Form'

const LowerForm = props => {
  return (
    <Form>
      <div class="inline">
        <div>
          <label>URL</label>
          <input type="text" class="url" />
        </div>
        <div>
          <label>CTA</label>
          <input type="text" class="cta" />
        </div>
      </div>
      <label>Image</label>
      <span>../image/upload/q_70</span>
      <input type="text" class="image" />
      <label>Title</label>
      <input type="text" class="title" />
      <label>Subtitle</label>
      <input type="text" class="subtitle" />
    </Form>
  )
}

export default LowerForm
