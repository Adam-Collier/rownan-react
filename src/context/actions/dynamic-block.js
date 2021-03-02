const dynamicBlock = {
  addDynamicBlock: (state) => ({
    ...state,
    contentBlocks: [...state.contentBlocks, { type: 'select', content: {} }],
  }),
  addDynamicBlockContent: (state, action) => ({
    ...state,
    contentBlocks: state.contentBlocks.map((item, index) => {
      if (index !== action.index) return item
      return {
        ...item,
        content: {
          ...item.content,
          [action.name]: action.payload,
        },
      }
    }),
  }),
  editDynamicBlock: (state, action) => ({
    ...state,
    contentBlocks: state.contentBlocks.map((item, index) => {
      if (index !== action.index) {
        return item
      }
      return { type: action.payload, content: action.initial }
    }),
  }),
  removeDynamicBlock: (state, action) => {
    let newArr = state.contentBlocks.filter(
      (block, index) => index !== action.payload
    )
    return { ...state, contentBlocks: newArr }
  },
}

export default dynamicBlock
