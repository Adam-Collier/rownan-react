import InfoStripTemplate from '../../components/InfoStrip/InfoStripTemplate'
import HeroTemplate from '../../components/Hero/HeroTemplate'
import LowerTemplate from '../../components/Lower/LowerTemplate'
import SaleTemplate from '../../components/Sale/SaleTemplate'
import SaleCategoriesTemplate from '../../components/SaleCategories/SaleCategoryTemplate'
import MegaBannerWidget from '../../components/MegaBanner'
import TickerTemplate from '../../components/Ticker/TickerTemplate'
import CategoryTemplate from '../../components/Categories/CategoryTemplate'
import addPlaceholderImageCSS from '../../utils/add-placeholder-image-css'
import { AppDownloadTemplate } from '../../components/AppDownload'
import { SaleTextBannerTemplate } from '../../components/SaleTextBanner'

const hasContent = (state) => {
  if (Array.isArray(state)) {
    let arr = state.filter((object) => {
      return Object.keys(object).every(function (key) {
        return object[key] === ''
      })
        ? false
        : true
    })
    return arr.length ? true : false
  } else {
    // assume if it isn't an array it is an object
    return Object.keys(state).every(function (key) {
      return state[key] === ''
    })
      ? false
      : true
  }
}

const updateHTML = {
  updateHTML: (state) => {
    let heroBlocks = [],
      lowerBlocks = [],
      saleBlocks = []

    state.contentBlocks.map((block) => {
      if (block.type === 'hero') heroBlocks.push(block.content)
      if (block.type === 'lower') lowerBlocks.push(block.content)
      if (block.type === 'sale') saleBlocks.push(block.content)
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
      ${HeroTemplate(heroBlocks)}
    </div>
    ${
      hasContent(state.saleTextBanner)
        ? SaleTextBannerTemplate(state.saleTextBanner)
        : ''
    }
    ${SaleTemplate(saleBlocks)}
    ${
      hasContent(state.saleCategories)
        ? SaleCategoriesTemplate(state.saleCategories, state.territory)
        : ''
    }
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

    let output = window.prettier.format(outputHTML(), {
      parser: 'html',
      plugins: window.prettierPlugins,
    })

    return { ...state, outputHTML: output }
  },
}

export default updateHTML
