import React from 'react'

// https://kentcdodds.com/blog/how-to-use-react-context-effectively
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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function StateProvider({ children }) {
  const [state, setState] = React.useReducer(stateReducer, {
    content: 'currently no content',
    codePreview: 'currently no code preview',
    contentView: true
  })
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
