const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('app/layout/index.html');
}

ipcMain.on('minimize-window', () => {
  BrowserWindow.getFocusedWindow()?.minimize();
});

ipcMain.on('maximize-window', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win?.isMaximized()) {
      win.unmaximize();
  } else {
      win?.maximize();
  }
});

ipcMain.on('close-window', () => {
  BrowserWindow.getFocusedWindow()?.close();
});

ipcMain.on('playErrorSound', (event) => {
  try {
    if (process.platform === 'win32') {
      exec('powershell -c (New-Object Media.SoundPlayer "C:\\Windows\\Media\\Windows Error.wav").PlaySync()', (error) => {
        if (error) {
          console.error('Error playing sound:', error);
          exec('rundll32 user32.dll,MessageBeep');
        }
      });
    } else if (process.platform === 'darwin') {
      exec('afplay /System/Library/Sounds/Basso.aiff', (error) => {
        if (error) {
          console.error('Error playing sound:', error);
        }
      });
    } else {
      exec('paplay /usr/share/sounds/freedesktop/stereo/dialog-error.oga', (error) => {
        if (error) {
          exec('paplay /usr/share/sounds/gnome/default/alerts/glass.ogg', (error) => {
            if (error) {
              console.error('Error playing sound:', error);
            }
          });
        }
      });
    }
  } catch (error) {
    console.error('Error in playErrorSound:', error);
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

console.log("Built by bitts cafe");