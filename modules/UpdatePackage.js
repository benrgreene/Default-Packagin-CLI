// Library helpers
const shell     = require("shelljs")
const inquirer  = require("inquirer")
const chalk     = require("chalk")
// custom settings
const settings  = require("./Settings.js")

module.exports = {
  update: (args) => {
    
  },
  setDefault: (args) => {
    let file       = args.file ? args.file : 'package.json'
    let fileExists = shell.test('-f', file)
    if (fileExists) {
      let newContent  = shell.cat(file)
      let shellString = shell.ShellString(newContent)
      let results     = shellString.to(`${settings.settingsFolder}/${settings.settingsPackageFile}`)
      if (shellString && results) {
        console.log(chalk.green('Updated default "package.json" file'))
      } else {
        console.log(chalk.red(`Error: couldn't update webpack config file.`))
      }
    } else {
      console.log(chalk.red(`Error: file ${file} doesn\'t exist`))
    }
  }
}