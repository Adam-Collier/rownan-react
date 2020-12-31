import saveFileFunc from '../lib/saveFile'

export default {
  saveFile: state => {
    saveFileFunc(state)
    return { ...state }
  }
}
