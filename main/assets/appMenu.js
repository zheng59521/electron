import { MenuItem } from 'electron';
export const appMenuTemplate = [
    {
        label: 'File',
        submenu: []
    },
    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            {
                role: 'pasteandmatchstyle'
            },
            {
                role: 'delete'
            },
            {
                role: 'selectall'
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                role: 'reload'
            },
            {
                role: 'forcereload'
            },
            {
                role: 'toggledevtools'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Home Page',
                click() { require('electron').shell.openExternal('http://www.jianshu.com/u/a7454e40399d'); }
            }
        ]
    }
];

export const menuArr = [
    new MenuItem({ //menu.items获取是的主菜单一级菜单的菜单数组，menu.items[0]在这里就是第1个File菜单对象，在其子菜单submenu中添加新的子菜单
      label: "New",
      click(){
        mainWindow.webContents.send('action', 'new'); //点击后向主页渲染进程发送“新建文件”的命令
      },
      accelerator: 'CmdOrCtrl+N' //快捷键：Ctrl+N
    }),
    new MenuItem({ 
      label: "Open",
      click(){
        mainWindow.webContents.send('action', 'open'); 
      },
      accelerator: 'CmdOrCtrl+O' 
    }),
    new MenuItem({ 
      label: "save",
      click(){
        mainWindow.webContents.send('action', 'save'); 
      },
      accelerator: 'CmdOrCtrl+S' 
    }),
    new MenuItem({
      type: 'separator' // 分割线
    }),
    new MenuItem({ 
      role: "quit",
    })
  ];