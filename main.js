const {app, BrowserWindow} = require('electron')
const path = require('path')
const Datastore = require('nedb-core')

var timeLogStorage = new Datastore({ filename: 'data/timelogs', autoload: true })

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  ignored: [/node_modules|[\/\\]\./, /data/]
});

app.timeLogStorage = timeLogStorage

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadURL(path.join('file://', __dirname, 'app', 'html','index.html'))
})

exports.openWindow = () => {
  let win = new BrowserWindow({
    width: 400,
    height: 300
  })

  win.loadURL(`file://${__dirname}/renata.html`)
}
