const { app } = require('electron')
const tempDirPath = require('electron').app.getPath('temp')
const portscanner = require('portscanner')

// require the module as normal
let bs = require('browser-sync').create()

let browserSync = () => {
  // find a port not in use
  portscanner.findAPortNotInUse(3000, 4000, function(error, port) {
    // .init starts the server
    bs.init({
      watch: true,
      server: `${tempDirPath}/template`,
      index: `/content-preview.html`,
      port
    })

    // Now call methods on bs instead of the
    // main browserSync module export
    bs.reload('*.html')

    // Listen to change events on HTML and reload
    bs.watch('*.html').on('change', bs.reload)
  })
}

module.exports = browserSync
