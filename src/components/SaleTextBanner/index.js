import React from 'react'
import removeEmptyLines from '../../lib/removeEmptyLines'
import { useAppState, useAppDispatch } from '../../context'
import { BlockWrapper } from '../styles/ContentBlocks'

const SaleTextBannerTemplate = ({ headline, tagline, link, terms, cta }) => {
  return removeEmptyLines`
    <style>
    .sale-mega-banner {
      display: block;
      background: #ffd4ca;
      padding: 1.5rem 0;
      position: relative;
    }

    .sale-mega-banner *:not(span) {
      font-family: 'titling-gothic-fb-wide', missguided, arial, sans-serif;
      text-transform: uppercase;
      font-weight: 400;
      color: #000;
    }

    .sale-mega-banner p {
      font-size: 1.25rem;
    }

    .sale-mega-banner p:last-of-type {
      margin-bottom: 0;
    }

    .sale-mega-banner h4 {
      font-size: 2rem;
    }

    .sale-mega-banner h4 span {
      font-weight: 600;
    }

    .sale-mega-banner > span {
      position: absolute;
      font-weight: bold;
      bottom: 0.5rem;
      right: 0.5rem;
      font-size: 10px;
    }

    @media (max-width: 767px) {
      .row:last-of-type {
        margin-bottom: 0;
      }

      .sale-mega-banner {
        padding: 2rem 0;
        margin-bottom: 3rem;
      }

      .sale-mega-banner p {
        font-size: 1rem;
      }

      .sale-mega-banner h4 {
        font-size: 1.5rem;
      }

      .row:last-of-type img {
        margin-bottom: 0;
      }
    }
  </style>
  <a href="${link}" class="sale-mega-banner">
    <p>${tagline}</p>
    <h4>${headline}</h4>
    <p>${cta}</p>
    <span>${terms}</span>
  </a>
    `
}

const SaleTextBannerBlock = () => {
  const { saleTextBanner } = useAppState()
  const dispatch = useAppDispatch()

  const { link, headline, tagline, cta, terms } = saleTextBanner

  const handleChange = (e) => {
    dispatch({
      type: 'saleTextBanner',
      name: e.target.name,
      payload:
        e.target.name === 'link' ? e.target.value.trim() : e.target.value,
    })
  }

  return (
    <BlockWrapper>
      <section>
        <h3>Sale Text Banner</h3>
      </section>
      <div>
        <label htmlFor="link">Link</label>
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="headline">Headline</label>
        <input
          type="text"
          name="headline"
          value={headline}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="cta">cta</label>
        <input
          type="text"
          name="cta"
          value={cta}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="terms">Terms</label>
        <input
          type="text"
          name="terms"
          value={terms}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </BlockWrapper>
  )
}

export { SaleTextBannerBlock, SaleTextBannerTemplate }
