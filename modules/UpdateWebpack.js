// Library helpers
const shell     = require("shelljs")
const inquirer  = require("inquirer")
const chalk     = require("chalk")
// custom settings
const settings  = require("./Settings.js")

module.exports = {
  // arguements:
  //    file: the file to set as the default (default: 'webpack.config.js')
  update: (args) => {
    let file       = args.file ? args.file : 'webpack.config.js'
    let fileExists = shell.test('-f', file)
    if (fileExists) {
      let newContent  = shell.cat(file)
      let shellString = shell.ShellString(newContent)
      let results     = shellString.to(`${settings.settingsFolder}/${settings.settingsWebpackFile}`)
      if (shellString && results) {
        console.log(chalk.green('Updated "webpack.config.js" file'))
      } else {
        console.log(chalk.red(`Error: couldn't update webpack config file.`))
      }
    } else {
      console.log(chalk.red(`Error: file ${file} doesn\'t exist`))
    }
  }
}