import React from 'react'

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

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

let initialState = {
  content: 'currently no content',
  codePreview: 'currently no code preview',
  contentView: true,
  contentBlocks: [],
  editorCode: ''
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

export { StateProvider, useAppState, useAppDispatch }
