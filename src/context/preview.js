import contentPreviewUpdate from '../lib/contentPreviewUpdate'

export default {
  updateContentPreview: state => {
    contentPreviewUpdate(state.outputHTML)
    return { ...state }
  },
  switchView: state => ({ ...state, contentView: !state.contentView })
}
