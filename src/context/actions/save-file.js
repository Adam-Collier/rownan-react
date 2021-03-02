import { save, saveAs } from '../../utils/saveFile'

const saveContext = {
  saveFile: (state) => {
    let fileName = save(state)
    return { ...state, savedFilePath: fileName }
  },
  saveAs: (state) => {
    let fileName = saveAs(state)
    return { ...state, savedFilePath: fileName }
  },
}

export default saveContext
