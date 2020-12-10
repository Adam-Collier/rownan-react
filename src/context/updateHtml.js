import prettier from 'prettier/standalone'
import html from 'prettier/parser-html'
import css from 'prettier/parser-postcss'
import InfoStripTemplate from '../Components/InfoStrip/InfoStripTemplate'
import HeroTemplate from '../Components/Hero/HeroTemplate'
import LowerTemplate from '../Components/Lower/LowerTemplate'
import MegaBannerWidget from '../Components/MegaBanner'
import TickerTemplate from '../Components/Ticker/TickerTemplate'
import CategoryTemplate from '../Components/Categories/CategoryTemplate'
import addPlaceholderImageCSS from '../lib/addPlaceholderImageCSS'
import { AppDownloadTemplate } from '../Components/AppDownload'

const hasContent = state => {
  if (Array.isArray(state)) {
    let arr = state.filter(object => {
      return Object.keys(object).every(function(key) {
        return object[key] === ''
      })
        ? false
        : true
    })
    return arr.length ? true : false
  } else {
    // assume if it isn't an array it is an object
    return Object.keys(state).every(function(key) {
      return state[key] === ''
    })
      ? false
      : true
  }
}

export default {
  updateHTML: state => {
    let mainBlocks = [],
      lowerBlocks = []

    state.contentBlocks.map(block => {
      if (block.type === 'main') mainBlocks.push(block.content)
      if (block.type === 'lower') lowerBlocks.push(block.content)
      return null
    })

    let styles = addPlaceholderImageCSS(state.editorCode, state.contentBlocks)

    let outputHTML = () => {
      return `
  ${styles}
  <div class="container">
    ${MegaBannerWidget(state.territory)}
    ${state.tickerText ? TickerTemplate(state.tickerText) : ''}
    <div id="homeSlider">
      ${HeroTemplate(mainBlocks)}
    </div>
    ${hasContent(state.promoBlocks) ? InfoStripTemplate(state.promoBlocks) : ''}
    ${
      hasContent(state.categories)
        ? CategoryTemplate(state.categories, state.territory)
        : ''
    }
    <div class="slick-three">
      ${LowerTemplate(lowerBlocks)}
    </div>
    ${
      hasContent(state.appDownload)
        ? AppDownloadTemplate(state.appDownload)
        : ''
    }
  </div>`
    }

    let output = prettier.format(outputHTML(), {
      parser: 'html',
      plugins: [html, css]
    })

    return { ...state, outputHTML: output }
  }
}
