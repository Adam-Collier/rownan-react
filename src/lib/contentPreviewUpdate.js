import cheerio from 'cheerio'
let basePath = window.require('electron').remote.app.getPath('temp')
const fs = window.require('fs')

const contentPreviewUpdate = (outputHTML) => {
  let currentHTML = fs.readFileSync(
    `${basePath}/template/content-preview.html`,
    'utf-8'
  )
  // console.log(currentHTML)
  let $ = cheerio.load(currentHTML)
  $('.preview-wrapper').html(outputHTML)
  fs.writeFile(`${basePath}/template/content-preview.html`, $.html(), (err) => {
    if (err) console.log(err)
    console.log('successfully wrote file')
    if (document.querySelector('iframe'))
      document.querySelector('iframe').src += ''
  })
}

export default contentPreviewUpdate
