const fs = window.require('fs')

const writeSaveFile = (state, fileName) => {
  console.log(state, fileName)
  // return if no file selected
  if (fileName === undefined) return

  //create jsonDir file and get fileName after last slash
  let filePath = fileName.match(/^(.*[/])/)
  let jsonDir = filePath[1] + 'savedFiles/'

  // remove html extension
  let jsonFileName = fileName.match(/[^/]+$/)
  jsonFileName = jsonFileName[0].slice(0, -5)

  // check if json directory exists
  if (fs.existsSync(jsonDir)) {
    // if directory exists write file
    fs.writeFile(
      jsonDir + '/' + jsonFileName + '.json',
      JSON.stringify(state, null, 2),
      err => {
        if (err) console.log(err)
      }
    )
  } else {
    // if directory doesnt exist create it then write the json
    fs.mkdir(jsonDir, err => {
      if (err) console.log(err, 'failed to create directory')
      fs.writeFile(
        jsonDir + '/' + jsonFileName + '.json',
        JSON.stringify(state, null, 2),
        err => {
          if (err) console.log(err)
        }
      )
    })
  }

  fs.writeFile(fileName, state.outputHTML, err => {
    if (err) console.log(err)
    const notification = {
      title: 'File Saved',
      body: 'Saved to: ' + fileName
    }
    const myNotification = new window.Notification(
      notification.title,
      notification
    )

    myNotification.onclick = () => {
      console.log('Notification clicked')
    }
  })
}

export default writeSaveFile
