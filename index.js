#!/usr/bin/env node

// Require libraries
const inquirer = require("inquirer")
const chalk    = require("chalk")
const shell    = require("shelljs")
// Custom Modules
const ArgLib         = require("./modules/ArgLib.js")
const Installer      = require("./modules/Installer.js")
const CreatePackage  = require("./modules/CreatePackage.js")
const UpdatePackage  = require("./modules/UpdatePackage.js")
const CreateWebpack  = require("./modules/CreateWebpack.js")
const UpdateWebpack  = require("./modules/UpdateWebpack.js")
const DefaultContent = require("./modules/DefaultContents.js")
const Help           = require("./modules/Help.js")

// Get CLI args
const args = ArgLib.getArgObject()

// Run the main script
const run = async () => {
  Installer.setup()
  switch (args.main) {
    case 'list':
      handleCommand([], DefaultContent.displayDefaults)
      break
    case 'help':
      handleCommand(['command'], Help.help)
      break
    case 'create-package':
      handleCommand([], CreatePackage.create)
      break
    case 'update-package-dep':
      // Command Parameters:
      // action: (update dependency, remove dependency, add dependency, etc)
      // dep: the dependenxy to update
      // value: value to set 
      // isDev: whether to update devDependencies or dependencies
      handleCommand(['action', 'dep'], UpdatePackage.update)
      break
    case 'update-package':
      handleCommand([], UpdatePackage.setDefault)
      break
    case 'create-webpack':
      handleCommand([], CreateWebpack.create)
      break
    case 'update-webpack':
      // file: the file to set as the default (default: 'webpack.config.js')
      handleCommand([], UpdateWebpack.update)
      break
    default:
      console.log(`help`)
  }
}

// Handles a CLI command:
// Parameters:
//    commandArgs - the required arguments for the command
//    callback    - the function to call after argument validation
const handleCommand = (commandArgs, callback) => {
  let haveProperties = ArgLib.hasProperties(args, commandArgs)
  if (haveProperties) {
    callback(args)
  } else {
    let messages = ArgLib.missingProperties(args, commandArgs)
    console.log(messages)
  }
}

run()