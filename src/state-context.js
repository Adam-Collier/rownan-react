import React from 'react'
import PromoSlot from './Components/PromoSlot'
import MainSlots from './Components/MainSlots'
import LowerSlots from './Components/LowerSlots'

import contentPreviewUpdate from './lib/contentPreviewUpdate'

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://daveceddia.com/react-redux-immutability-guide/
const StateContext = React.createContext()
const DispatchContext = React.createContext()

function stateReducer(state, action) {
  switch (action.type) {
    case 'editorCode': {
      return { ...state, editorCode: action.payload }
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
      let outputHTML = () => {
        return `
<div class="container">
  <div id="homeSlider">
    ${MainSlots(mainBlocks)}
  </div>
  ${PromoSlot(state.promoBlocks)}
  <div class="slick-three">
    ${LowerSlots(lowerBlocks)}
  </div>
</div>
  `
      }
      return { ...state, outputHTML: outputHTML() }
    }

    case 'updateContentPreview': {
      contentPreviewUpdate(state.editorCode + state.outputHTML)
      return { ...state }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

let defaultEditorCode = `<style>
  .title1, .title3, .subtitle1, .subtitle3, .container .button{
    text-transform: none;
  }
  @media (min-width:768px){
    .row1 .title1,
    .row2 .title1,
    .row3 .title1{
      display: none;
    }
    .row .subtitle1{
      margin-top: 20px;
    }
  }
  @media (max-width: 767px){
    .row svg{
      display: none;
    }
  }
</style>`

let initialState = {
  categories: ['', '', '', '', ''],
  codePreview: 'currently no code preview',
  content: 'currently no content',
  contentBlocks: [],
  contentView: true,
  editorCode: '',
  outputHTML: `
<div class="container">
  <div id="homeSlider">

  </div>
  <div class="slick-three">
    <div class="blocker"></div>
    
  </div>
</div>
  `,
  promoBlocks: []
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
