const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+o',
        click: () => {
          var focusedWindow = BrowserWindow.getFocusedWindow()
          focusedWindow.webContents.send('openFile')
        },
      },
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+s',
        click: () => {
          var focusedWindow = BrowserWindow.getFocusedWindow()
          focusedWindow.webContents.send('save')
        },
      },
      {
        label: 'Save As',
        accelerator: 'CmdOrCtrl+Shift+S',
        click: () => {
          var focusedWindow = BrowserWindow.getFocusedWindow()
          focusedWindow.webContents.send('saveAs')
        },
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo',
      },
      {
        role: 'redo',
      },
      {
        type: 'separator',
      },
      {
        label: 'Generate',
        accelerator: 'CmdOrCtrl+\\',
        click: () => {
          var focusedWindow = BrowserWindow.getFocusedWindow()
          focusedWindow.webContents.send('generate')
        },
      },
      {
        label: 'Copy Code',
        accelerator: 'CmdOrCtrl+Shift+C',
        click: () => {
          console.log('copy clicked')
          var focusedWindow = BrowserWindow.getFocusedWindow()
          focusedWindow.webContents.send('copy-code')
        },
      },
      {
        label: 'Open in Editor',
        accelerator: 'CmdOrCtrl+Shift+O',
        click: () => {
          var focusedWindow = BrowserWindow.getFocusedWindow()
          focusedWindow.webContents.send('open-editor')
        },
      },
      {
        label: 'Toggle Preview',
        accelerator: 'CmdOrCtrl+p',
        click: () => {
          var focusedWindow = BrowserWindow.getFocusedWindow()
          focusedWindow.webContents.send('preview')
        },
      },
      {
        type: 'separator',
      },
      {
        role: 'cut',
      },
      {
        role: 'copy',
      },
      {
        role: 'paste',
      },
      {
        role: 'pasteandmatchstyle',
      },
      {
        role: 'delete',
      },
      {
        role: 'selectall',
      },
    ],
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        },
      },
      {
        label: 'Toggle Developer Tools',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Mobile View',
        accelerator: 'CmdOrCtrl+;',
        click: () => {
          console.log('Mobile View')
          var focusedWindow = BrowserWindow.getFocusedWindow()
          focusedWindow.webContents.send('mobileView')
        },
      },
      {
        role: 'resetzoom',
      },
      {
        role: 'zoomin',
      },
      {
        role: 'zoomout',
      },
      {
        type: 'separator',
      },
      {
        role: 'togglefullscreen',
      },
    ],
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize',
      },
      {
        role: 'close',
      },
    ],
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click() {
          require('electron').shell.openExternal('http://electron.atom.io')
        },
      },
    ],
  },
]

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        role: 'about',
      },
      {
        type: 'separator',
      },
      {
        role: 'services',
        submenu: [],
      },
      {
        type: 'separator',
      },
      {
        role: 'hide',
      },
      {
        role: 'hideothers',
      },
      {
        role: 'unhide',
      },
      {
        type: 'separator',
      },
      {
        role: 'quit',
      },
    ],
  })
  // Edit menu.
  template[2].submenu.push(
    {
      type: 'separator',
    },
    {
      label: 'Speech',
      submenu: [
        {
          role: 'startspeaking',
        },
        {
          role: 'stopspeaking',
        },
      ],
    }
  )
  // Window menu.
  template[4].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close',
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize',
    },
    {
      label: 'Zoom',
      role: 'zoom',
    },
    {
      type: 'separator',
    },
    {
      label: 'Bring All to Front',
      role: 'front',
    },
  ]
}

module.exports = template
