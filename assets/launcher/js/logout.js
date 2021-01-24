function doLogout(){
    const remote = require('electron').remote
      const session = remote.session
      session.defaultSession.clearStorageData([], (data) => {}).then(
          window.location = 'loader.html'
      )
}