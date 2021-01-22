// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const browserSync = require('./browsersync')
const fs = require('fs-extra')
const menuTemplate = require('./menuTemplate')

const appPath = require('electron').app.getAppPath()
const tempDirPath = require('electron').app.getPath('temp')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    width: 1125,
    height: 800,
    backgroundColor: '#2E3235',
    minWidth: 750,
    minHeight: 300,
    useContentSize: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      enableRemoteModule: true
    }
  })

  // and load the index.html of the app.
  process.env.ELECTRON_START_URL
    ? mainWindow.loadURL(process.env.ELECTRON_START_URL)
    : mainWindow.loadFile('./build/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // create the menu
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
}

app
  .whenReady()
  .then(() => {
    if (process.env.ELECTRON_START_URL) {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS
      } = require('electron-devtools-installer')

      installExtension(REACT_DEVELOPER_TOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log('An error occurred: ', err))
    }
    return
  })
  .then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// set up temp file
fs.copySync(
  process.env.ELECTRON_START_URL
    ? `${appPath}/public/template`
    : `${appPath}/build/template`,
  `${tempDirPath}/template`
)
console.log('success!')

browserSync()
