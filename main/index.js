import { app, BrowserWindow } from 'electron'
import { Menu, MenuItem } from 'electron';
import { appMenuTemplate, menuArr } from './assets/appMenu.js'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 880,
    useContentSize: true,
    width: 1440
  })
  mainWindow.loadURL(winURL)
  let menu = Menu.buildFromTemplate(appMenuTemplate)  // 读取下拉菜单模板
  menuArr.forEach (ele => {     // 下拉菜单实体
    menu.items[0].submenu.append(ele);    // 使用实体填充模板
  }) 
  Menu.setApplicationMenu(menu); //注意：这个代码要放到菜单添加完成之后，否则会造成新增菜单的快捷键无效

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
