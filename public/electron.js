// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const { autoUpdater } = require('electron-updater')
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
      webSecurity: false
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

  /* Update is ready */
  autoUpdater.on('update-downloaded', updateInfo => {
    /* Notify user about ready to be installed update */
    // ...
    /* Or force quit app and install update */
    // autoUpdater.quitAndInstall();
  })

  /* Check for updates manually */
  autoUpdater.checkForUpdates()

  /* Check updates every 10 minutes */
  setInterval(() => {
    autoUpdater.checkForUpdates()
  }, 10 * 60 * 1000)

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// install dev tools
const installExtensions = async () => {
  const installer = require('electron-devtools-installer')
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ['REACT_DEVELOPER_TOOLS']
  console.log('devtools installed')
  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  // install the devtools
  if (process.env.ELECTRON_START_URL) await installExtensions()
  createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
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
