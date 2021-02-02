import writeSaveFile from './writeSaveFile'

import { remote } from 'electron'
const { dialog } = remote

const saveWithDialog = (state) => {
  // open the save dialog
  let fileName = dialog.showSaveDialogSync({
    defaultPath: `${state.territory.identifier}.html`,
    filters: [
      {
        name: 'Custom File Type',
        extensions: ['html'],
      },
    ],
  })

  state = {
    ...state,
    savedFilePath: fileName,
  }

  writeSaveFile(state, fileName)

  return fileName
}

const saveNoDialog = (state) => {
  writeSaveFile(state, state.savedFilePath)
  return state.savedFilePath
}

// the commands
const save = (state) => {
  if (state.savedFilePath) {
    return saveNoDialog(state)
  } else {
    return saveWithDialog(state)
  }
}

const saveAs = (state) => {
  return saveWithDialog(state)
}

export { save, saveAs }
