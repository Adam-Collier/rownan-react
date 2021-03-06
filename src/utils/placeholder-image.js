import shortid from 'shortid'
import request from 'request-promise-native'

const tempDirPath = window.require('electron').remote.app.getPath('temp')
const fs = window.require('fs-extra')

export const placeholderImage = async (image) => {
  try {
    if (
      image.match(/https:\/\/i1.adis.ws\/i\/missguided/) ||
      image.match(/\.(jpeg|jpg|gif|png)$/)
    ) {
      let id = shortid.generate()

      let imagePath = `${tempDirPath}rownan--temp/${id}.jpeg`

      const response = await request.get({
        url: image,
        encoding: 'binary',
      })

      await fs.outputFile(imagePath, response, { encoding: 'binary' })

      return ''
    }
    return ''
  } catch (err) {
    console.error(err)
  }
}
