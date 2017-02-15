const {app, BrowserWindow} = require('electron')
const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600
  })


  win.loadURL(path.join('file://', __dirname, 'app', 'html','index.html'))
})

exports.openWindow = () => {
  let win = new BrowserWindow({
    width: 400,
    height: 300
  })

  win.loadURL(`file://${__dirname}/renata.html`)
}
