// Library helpers
const shell     = require("shelljs")
const inquirer  = require("inquirer")
const chalk     = require("chalk")
// custom settings
const settings  = require("./Settings.js")

module.exports = {
  create: (args) => {
    if (shell.test('-f', 'package.json')) {
      console.log(chalk.blue('Package file exists, aborting.'))
    } else {
      // Get default content
      let defaultContent = shell.cat(`${settings.settingsFolder}/${settings.settingsPackageFile}`)
      let defaultJSON    = JSON.parse(defaultContent)
      // Get name, author, and description
      inquirer.prompt([
        {'name': 'name', 'message': 'Package Name:'},
        {'name': 'author', 'message': 'Package Author:'},
        {'name': 'description', 'message': 'Package Description:'},
      ])
      .then((answers) => {
        defaultJSON.name        = answers.name
        defaultJSON.author      = answers.author
        defaultJSON.description = answers.description
        let shellString         = shell.ShellString(JSON.stringify(defaultJSON, null, 2))
        shellString.to('package.json')
        console.log(chalk.green('new "package.json" created'))
      })
    }
  }
}