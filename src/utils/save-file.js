import writeSaveFile from './write-save-file'
const { dialog } = window.require('electron').remote
const fs = window.require('fs')

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
  // check if the state.savedFilePath exists
  if (state.savedFilePath) {
    // check whether the file/folder exists on their machine
    try {
      fs.accessSync(state.savedFilePath, fs.constants.W_OK | fs.constants.R_OK)
      return saveNoDialog(state)
    } catch (e) {
      return saveWithDialog(state)
    }
  } else {
    return saveWithDialog(state)
  }
}

const saveAs = (state) => {
  return saveWithDialog(state)
}

export { save, saveAs }
