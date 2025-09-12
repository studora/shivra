const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('SevaBotAPI', {
  navigateTo: (url) => ipcRenderer.send('navigate-to', url)
});
