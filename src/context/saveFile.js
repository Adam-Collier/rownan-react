import { save, saveAs } from '../lib/saveFile'

export default {
  saveFile: state => {
    let fileName = save(state)
    return { ...state, savedFilePath: fileName }
  },
  saveAs: state => {
    let fileName = saveAs(state)
    return { ...state, savedFilePath: fileName }
  }
}
