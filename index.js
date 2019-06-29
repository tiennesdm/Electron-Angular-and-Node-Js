const { app, BrowserWindow, ipcMain } = require('electron');
const server = require('./server');
const ffmpeg = require('ffmpeg');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
            width: 1200,
            height: 800,
            webPreferences: {
                nodeIntegration: true
            },
            backgroundColor: '#FF0000',
            //  fullscreen: true,
            //   maximizable: true,
            // fullscreenable: true,
            // skipTaskbar: true,
            autoHideMenuBar: true,
            resizable: true,
            // kiosk: true


            //  "start": "electron-packager . --asar",

            //  simpleFullscreen: true,
            //   darkTheme: true
        })
        // win.isFullScreen();
        //   win.mergeAllWindows();
        // and load the index.html of the app.
        //    http://localhost/
        // const load =   win.loadFile('./frontend/index.html');
        // win.loadURL(`file://${__dirname}/frontend/index.html`)
        /* win.loadURL('http://localhost:8000/post', {
                 postData: [{
                     type: 'rawData',
                     bytes: Buffer.from('hello=world')
                 }],
                 extraHeaders: 'Content-Type: application/x-www-form-urlencoded'
             }) */
    win.loadURL('http://localhost:9000/');
    /* ipcMain.on(load,()=>{
         
     }); */
    //   win.loadURL(` http://localhost/index.html`);
    //  win.setBrowserView('http://localhost:3000/');
    //  win.loadURL('http://teacher.livetutoring.dronstudy.com/');
    // win.setBrowserView();
    //  win.loadURL('http://rentomojo-env.wkziftdezh.us-east-2.elasticbeanstalk.com');


    // Open the DevTools.
    //   win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}


ipcMain.on('video:submit', (event, path) => {
    console.log('paht', path);
    /*  ffmpeg.ffprobe(path, (err, metadata) => {
          console.log('Video duration is ', metadata.format.duration);
      }); */

});


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.