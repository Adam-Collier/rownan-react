export default {
  placeholderImage: (state, action) => {
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
}
