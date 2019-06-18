import shortid from 'shortid'
import request from 'request-promise-native'

const tempDirPath = window.require('electron').remote.app.getPath('temp')
const fs = window.require('fs-extra')
const sqip = window.require('sqip')

export const placeholderImage = async imgPart => {
  try {
    let image = `https://media.missguided.co.uk/image/upload${imgPart}`
    let id = shortid.generate()

    let imagePath = `${tempDirPath}rownan--temp/${id}.jpeg`

    const response = await request.get({
      url: image,
      encoding: 'binary'
    })

    await fs.outputFile(imagePath, response, { encoding: 'binary' })

    const options = {
      input: imagePath
    }

    const result = await sqip.default({ ...options })
    console.log(result, 'form inside the function')
    return result.metadata.dataURIBase64
  } catch (err) {
    console.error(err)
  }
}
