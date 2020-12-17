import React from 'react'

import defaultEditorCode from './defaultEditorCode'
import initialState from './initialState'

import autoFill from './autoFill'
import dynamicBlock from './dynamicBlock'
import infoStrip from './infoStrip'
import placeholderImage from './placeholderImage'
import saveFile from './saveFile'
import updateHTML from './updateHtml'
import updateVisualPreview from './preview'

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// https://daveceddia.com/react-redux-immutability-guide/
const StateContext = React.createContext()
const DispatchContext = React.createContext()

function stateReducer(state, action) {
  let context = type => {
    let actionSwitch = {
      addCategoryContent: () => ({
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
      }),
      addSaleCta: () => ({
        ...state,
        contentBlocks: state.contentBlocks.map((item, index) => {
          if (index !== action.index) return item
          return {
            ...item,
            content: {
              ...item.content,
              ctas: [...item.content.ctas, { text: '', url: '' }]
            }
          }
        })
      }),
      addSaleCtaContent: () => {
        return {
          ...state,
          contentBlocks: state.contentBlocks.map((contentBlock, index) => {
            if (index !== action.contentBlockIndex) return contentBlock
            return {
              ...contentBlock,
              content: {
                ...contentBlock.content,
                ctas: contentBlock.content.ctas.map((cta, i) => {
                  if (i !== action.index) return cta
                  return {
                    ...cta,
                    [action.name]: action.payload
                  }
                })
              }
            }
          })
        }
      },
      removeSaleCta: () => {
        return {
          ...state,
          contentBlocks: state.contentBlocks.map((contentBlock, index) => {
            if (index !== action.contentBlockIndex) return contentBlock
            return {
              ...contentBlock,
              content: {
                ...contentBlock.content,
                ctas: contentBlock.content.ctas.filter(
                  (block, index) => index !== action.index
                )
              }
            }
          })
        }
      },
      appDownload: () => ({
        ...state,
        appDownload: {
          ...state.appDownload,
          [action.name]: action.payload
        }
      }),
      editorCode: () => ({ ...state, editorCode: action.payload }),
      ...autoFill,
      openFile: () => ({ ...state, ...action.savedState }),
      reorderBlocks: () => ({
        ...state,
        [action.blockType]: [...action.reorderedBlocks]
      }),
      reorderNestedBlocks: () => ({
        ...state,
        contentBlocks: state.contentBlocks.map((item, index) => {
          if (index !== action.index) return item
          return {
            ...item,
            ctas: [...action.reorderedBlocks]
          }
        })
      }),
      switchTerritory: () => ({
        ...state,
        territory: {
          identifier: action.identifier,
          url: action.url
        }
      }),
      ticker: () => ({ ...state, tickerText: action.payload }),
      ...dynamicBlock,
      ...infoStrip,
      ...placeholderImage,
      ...saveFile,
      ...updateHTML,
      ...updateVisualPreview,
      default: () => {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }

    return (actionSwitch[type] || actionSwitch['default'])(state, action)
  }

  return context(action.type)
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
