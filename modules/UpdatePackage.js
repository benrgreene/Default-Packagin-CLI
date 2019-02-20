// Library helpers
const shell     = require("shelljs")
const inquirer  = require("inquirer")
const chalk     = require("chalk")
// custom settings
const settings  = require("./Settings.js")

module.exports = {
  update: (args) => {
    let action         = args.action
    let dep            = args.dep
    // only necessary for adding/updating
    let value          = args.value ? args.value : false
    if (('update' == action || 'add' == action) && !value) {
      console.log(chalk.red("Error: you must pass a value when adding or updating a dependency"))
      return
    }
    // only nexessary for adding
    let devType        = args.isDev ? 'devDependencies' : 'dependencies'
    // file info
    let file           = `${settings.settingsFolder}/${settings.settingsPackageFile}`
    let defaultContent = JSON.parse(shell.cat(file))
    // Perform action
    switch (action) {
      case 'update':
        defaultContent[devType][dep] = value
        break
      case 'add':
        defaultContent[devType][dep] = value
        break
      case 'remove':
        delete defaultContent[devType][dep]
        break
      default: 
        console.log(chalk.red('Error: invalid action. The action should be "update", "add", or "remove"'))
    }
    let shellString = shell.ShellString(JSON.stringify(defaultContent, null, 2))
    let results     = shellString.to(`${settings.settingsFolder}/${settings.settingsPackageFile}`)
    if (shellString && results) {
      console.log(chalk.green('Updated default "package.json" file'))
    } else {
      console.log(chalk.red(`Error: couldn't update package file.`))
    }
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
        console.log(chalk.red(`Error: couldn't update package file.`))
      }
    } else {
      console.log(chalk.red(`Error: file ${file} doesn\'t exist`))
    }
  }
}