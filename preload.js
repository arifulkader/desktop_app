const { contextBridge ,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  author :()=> "Ariful Kader",
  ping: () => ipcRenderer.invoke('ping')
  // we can also expose variables, not just functions
})