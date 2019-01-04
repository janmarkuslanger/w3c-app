const { app, BrowserWindow,Menu } = require('electron');

let win;

const applicationMenu = {
  label: "Application",
  submenu: [
    {
      label: "Quit",
      accelerator: "Command+Q",
      click: function() {
        app.quit();
      }
    }
  ]
};

const editMenu = {
  label: "Edit",
  submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
  ]
};

const devMenu = {
  label: "Developer",
  submenu: [
    {
      label: "Reload",
      accelerator: "Command+R",
      click: () => {
        win.webContents.reload();
      }
    }, {
      label: "Toggle Developer Tools",
      accelerator: "Alt+Command+I",
      click: () => {
        win.toggleDevTools();
      }
    }
  ]
};

const template = [applicationMenu,editMenu,devMenu];

function createWindow () {
  win = new BrowserWindow({ width: 1200, height: 1000 });

  win.loadFile('index.html');

  win.on('closed', () => {
    win = null;
  });

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
