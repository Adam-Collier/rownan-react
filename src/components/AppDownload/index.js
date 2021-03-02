import React from 'react'
import removeEmptyLines from '../../lib/removeEmptyLines'
import { useAppState, useAppDispatch } from '../../context'
import { BlockWrapper } from '../_styled/ContentBlocks'

const AppDownloadTemplate = ({ title, subtitle, link }) => {
  return removeEmptyLines`
<div class="app-download-strip">
  <style>
    .app-download-strip {
      background: #141414;
      margin-bottom: 3rem;
    }

    .app-download-strip a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 0.5rem;
    }

    .app-download-strip h3,
    .app-download-strip p {
      color: #ffffff;
      font-family: 'titling-gothic-fb-wide', missguided, arial, sans-serif;
      font-weight: 700;
      text-transform: none;
      margin: 0;
      text-align: center;
    }

    .app-download-strip h3 {
      display: flex;
      margin-bottom: 0.75rem;
    }
  </style>
  <a href="${link}">
    <h3>${title}</h3>
    <p>${subtitle}</p>
  </a>
</div>
    `
}

const AppDownloadBlock = () => {
  const { appDownload } = useAppState()
  const dispatch = useAppDispatch()

  const { title, subtitle, link } = appDownload

  const handleChange = (e) => {
    dispatch({
      type: 'appDownload',
      name: e.target.name,
      payload:
        e.target.name === 'link' ? e.target.value.trim() : e.target.value,
    })
  }

  return (
    <BlockWrapper>
      <section>
        <h3>App Download</h3>
      </section>
      <div>
        <label htmlFor="link">Link</label>
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="subtitle">Subtitle</label>
        <input
          type="text"
          name="subtitle"
          value={subtitle}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </BlockWrapper>
  )
}

export { AppDownloadBlock, AppDownloadTemplate }
