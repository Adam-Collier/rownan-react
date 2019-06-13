const { dialog } = window.require('electron').remote
const fs = window.require('fs')

export default () => {
  dialog.showOpenDialog({ filters: [{ extensions: ['json'] }] }, function(
    filePaths
  ) {
    return fs.readFileSync(filePaths[0], 'utf8')
  })
}
