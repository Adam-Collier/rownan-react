export default {
  removeInfoStrip: (state, action) => {
    let newArr = state.promoBlocks.filter(
      (block, index) => index !== action.index
    )
    return { ...state, promoBlocks: newArr }
  },
  addInfoStrip: state => ({
    ...state,
    promoBlocks: [...state.promoBlocks, { url: '', title: '' }]
  }),
  addInfoStripContent: (state, action) => ({
    ...state,
    promoBlocks: state.promoBlocks.map((item, index) => {
      if (index !== action.index) return item
      return {
        ...item,
        [action.name]: action.payload
      }
    })
  })
}
