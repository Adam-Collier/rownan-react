export default {
  autoFill: (state, action) => {
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
  },
  autoFillInfoStrip: (state, action) => {
    return {
      ...state,
      promoBlocks: [...action.payload]
    }
  },
  autoFillCategories: (state, action) => {
    let name = action.type.slice(8)
    let blockType = name.charAt(0).toLowerCase() + name.slice(1)
    return {
      ...state,
      [blockType]: [...action.payload]
    }
  }
}
