import contentPreviewUpdate from '../../lib/contentPreviewUpdate'

const preview = {
  updateContentPreview: (state) => {
    contentPreviewUpdate(state.outputHTML)
    return { ...state }
  },
  switchView: (state) => ({ ...state, contentView: !state.contentView }),
}

export default preview
