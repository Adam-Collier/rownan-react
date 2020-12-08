import React from 'react'
import prettier from 'prettier/standalone'
import html from 'prettier/parser-html'
import css from 'prettier/parser-postcss'
import InfoStripTemplate from './Components/InfoStrip/InfoStripTemplate'
import HeroTemplate from './Components/Hero/HeroTemplate'
import LowerTemplate from './Components/Lower/LowerTemplate'
import MegaBannerWidget from './Components/MegaBanner'
import TickerTemplate from './Components/Ticker/TickerTemplate'
import CategoryTemplate from './Components/Categories/CategoryTemplate'
import addPlaceholderImageCSS from './lib/addPlaceholderImageCSS'

import saveFile from './lib/saveFile'
import contentPreviewUpdate from './lib/contentPreviewUpdate'
import { AppDownloadTemplate } from './Components/AppDownload'

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://daveceddia.com/react-redux-immutability-guide/
const StateContext = React.createContext()
const DispatchContext = React.createContext()

const hasContent = state => {
  if(Array.isArray(state)){
    let arr = state.filter(object => {
    return Object.keys(object).every(function(key) {
      return object[key] === ''
    })
      ? false
      : true
    })
    return arr.length ? true : false
  }else{
    // assume if it isn't an array it is an object
    return Object.keys(state).every(function(key) {
      return state[key] === ''
    })
      ? false
      : true
  }
}

function stateReducer(state, action) {
  switch (action.type) {
    case 'editorCode': {
      return { ...state, editorCode: action.payload }
    }

    case 'ticker': {
      return { ...state, tickerText: action.payload }
    }

    case 'appDownload': {
      return { ...state, appDownload: {
        ...state.appDownload,
        [action.name]: action.payload,
      } }
    }

    case 'switch': {
      return { ...state, contentView: !state.contentView }
    }

    case 'addBlock': {
      return {
        ...state,
        contentBlocks: [...state.contentBlocks, { type: 'select', content: {} }]
      }
    }

    case 'addPromoBlock': {
      return {
        ...state,
        promoBlocks: [...state.promoBlocks, { url: '', title: '' }]
      }
    }

    case 'removePromoBlock': {
      let newArr = state.promoBlocks.filter(
        (block, index) => index !== action.index
      )
      return { ...state, promoBlocks: newArr }
    }

    case 'removeBlock': {
      let newArr = state.contentBlocks.filter(
        (block, index) => index !== action.payload
      )
      return { ...state, contentBlocks: newArr }
    }

    case 'editBlock': {
      return {
        ...state,
        contentBlocks: state.contentBlocks.map((item, index) => {
          if (index !== action.index) {
            return item
          }
          return { type: action.payload, content: action.initial }
        })
      }
    }

    case 'reorderBlocks': {
      return {
        ...state,
        [action.blockType]: [...action.reorderedBlocks]
      }
    }

    case 'addCategoryContent': {
      return {
        ...state,
        categories: state.categories.map((category, index) => {
          if (index !== action.index) {
            return category
          }
          return {
            ...category,
            [action.name]: action.payload
          }
        })
      }
    }

    case 'addBlockContent': {
      return {
        ...state,
        contentBlocks: state.contentBlocks.map((item, index) => {
          if (index !== action.index) return item
          return {
            ...item,
            content: {
              ...item.content,
              [action.name]: action.payload
            }
          }
        })
      }
    }

    case 'placeholderImage': {
      let name = `placeholder${action.name.charAt(0).toUpperCase() +
        action.name.slice(1)}`
      return {
        ...state,
        contentBlocks: state.contentBlocks.map((item, index) => {
          if (index !== action.index) return item
          return {
            ...item,
            content: {
              ...item.content,
              [name]: action.payload
            }
          }
        })
      }
    }

    case 'addPromoContent': {
      return {
        ...state,
        promoBlocks: state.promoBlocks.map((item, index) => {
          if (index !== action.index) return item
          return {
            ...item,
            [action.name]: action.payload
          }
        })
      }
    }

    case 'updateHTML': {
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
  ${hasContent(state.appDownload) ? AppDownloadTemplate(state.appDownload) : ""}
</div>`
      }

      let output = prettier.format(outputHTML(), {
        parser: 'html',
        plugins: [html, css]
      })

      return { ...state, outputHTML: output }
    }

    case 'updateContentPreview': {
      contentPreviewUpdate(state.outputHTML)
      return { ...state }
    }

    case 'saveFile': {
      saveFile(state)
      return { ...state }
    }

    case 'openFile': {
      return { ...state, ...action.savedState }
    }

    case 'territory': {
      return {
        ...state,
        territory: {
          identifier: action.identifier,
          url: action.url
        }
      }
    }

    case 'autoFill': {
      return {
        ...state,
        contentBlocks: state.contentBlocks.map((item, index) => {
          if (index !== action.index) return item
          return {
            ...item,
            content: {
              ...action.payload
            }
          }
        })
      }
    }

    case 'autoFillCategories':
    case 'autoFillPromoBlocks': {
      let name = action.type.slice(8)
      let blockType = name.charAt(0).toLowerCase() + name.slice(1)
      return {
        ...state,
        [blockType]: [...action.payload]
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

let defaultEditorCode = `<style>
  .title1,
  .title3,
  .subtitle1,
  .subtitle3,
  .container .button {
    text-transform: none;
  }
  @media (min-width: 768px) {
    .row button.button {
      background: rgb(255, 255, 255);
      color: rgb(50, 50, 50);
      border-color: rgb(255, 255, 255);
    }
    .row svg{
      margin-bottom: 40px;
      filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
    }
    .row .subtitle1{
      margin-bottom: 20px;
      text-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
    .row .banner_content {
      width: 100%;
    }
    .row1 .title1,
    .row2 .title1,
    .row3 .title1 {
      display: none;
    }
    .row .subtitle1 {
      margin-top: 20px;
    }
  }
  @media (max-width: 767px) {
    .row svg {
      display: none;
    }
  }
</style>`

let initialState = {
  appDownload: {
    link: "",
    title: "",
    subtitle: ""
  },
  categories: Array(5).fill({ url: '', title: '', image: '' }),
  contentBlocks: [],
  contentView: true,
  editorCode: defaultEditorCode,
  outputHTML: `${defaultEditorCode}
<div class="container">
  <div id="homeSlider">

  </div>
  <div class="slick-three">
    <div class="blocker"></div>
    
  </div>
</div>
  `,
  promoBlocks: [],
  territory: {
    identifier: 'UK',
    url: 'https://www.missguided.co.uk/'
  },
  tickerText: ""
}

function StateProvider({ children }) {
  const [state, setState] = React.useReducer(stateReducer, initialState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={setState}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useAppState() {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useAppDispatch() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export { StateProvider, useAppState, useAppDispatch, defaultEditorCode }
