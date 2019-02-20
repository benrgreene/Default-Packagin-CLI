// Library helpers
const shell     = require("shelljs")
const inquirer  = require("inquirer")
const chalk     = require("chalk")
// custom settings
const settings  = require("./Settings.js")

module.exports = {
  create: (args) => {
    if (shell.test('-f', 'webpack.config.js')) {
      console.log(chalk.blue('Webpack config file exists, aborting.'))
    } else {
      let defaultContent = shell.cat(`${settings.settingsFolder}/${settings.settingsWebpackFile}`)
      let shellString    = shell.ShellString(defaultContent)
      let results        = shellString.to('webpack.config.js')
      if (shellString && results) {
        console.log(chalk.green('New "webpack.config.js" created'))
      } else {
        console.log(chalk.red(`Error: couldn't create webpack config file.`))
      }
    }
  }
}