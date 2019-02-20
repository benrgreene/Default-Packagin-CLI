// Library helpers
const shell          = require("shelljs")
const DefaultContent = require("./DefaultContents.js")

// Settings
const settingsFolder      = '~/.brg-package-settings'
const settingsPackageFile = 'default-package.json'
const settingsWebpackFile = 'default-webpack.js'

module.exports = {
  // Need to ensure that the default settings exist
  setup: (args) => {
    let packageFile = `${settingsFolder}/${settingsPackageFile}`
    let webpackFile = `${settingsFolder}/${settingsWebpackFile}`
    // Check the settings folder
    if (!shell.test('-d', settingsFolder)) {
      console.log("Settings folder doesn't exist, creating folder")
      shell.mkdir(settingsFolder)
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