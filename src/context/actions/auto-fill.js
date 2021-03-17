const autoFill = {
  autoFill: (state, action) => {
    return {
      ...state,
      contentBlocks: state.contentBlocks.map((item, index) => {
        if (index !== action.index) return item
        return {
          ...item,
          content: {
            ...action.payload,
          },
        }
      }),
    }
  },
  autoFillBlock: (state, action) => {
    return {
      ...state,
      [action.blockName]: Array.isArray(action.payload)
        ? [...action.payload]
        : { ...action.payload },
    }
  },
}

export default autoFill
