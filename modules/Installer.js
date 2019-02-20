// Library helpers
const shell          = require("shelljs")
const DefaultContent = require("./DefaultContents.js")
// Custom modules
const settings  = require("./Settings.js")

module.exports = {
  // Need to ensure that the default settings exist
  setup: (args) => {
    let packageFile = `${settings.settingsFolder}/${settings.settingsPackageFile}`
    let webpackFile = `${settings.settingsFolder}/${settings.settingsWebpackFile}`
    // Check the settings folder
    if (!shell.test('-d', settings.settingsFolder)) {
      console.log("Settings folder doesn't exist, creating folder")
      shell.mkdir(settings.settingsFolder)
    }
    // check default package.json
    if (!shell.test('-f', packageFile)) {
      console.log("Default \"package.json\" file doesn't exist, creating default file")
      shell.touch(packageFile)
      let shellString = shell.ShellString(DefaultContent.defaultPackageContent)
      shellString.to(packageFile)
    }
    // check default webpack
    if (!shell.test('-f', webpackFile)) {
      console.log("Default \"webpack.config.js\" file doesn't exist, creating default file")
      shell.touch(webpackFile)
      let shellString = shell.ShellString(DefaultContent.defaultWebpackContent)
      shellString.to(webpackFile)
    }
  }
}