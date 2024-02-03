const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
information.innerText = information.innerText + `This application is created by ${versions.author()}`
// information.innerText= information.innerText + `.>>${ window.versions.ping()}`
const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()