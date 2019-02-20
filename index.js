#!/usr/bin/env node

// Require libraries
const inquirer = require("inquirer")
const chalk    = require("chalk")
const shell    = require("shelljs")
// Custom Modules
const ArgLib        = require("./modules/ArgLib.js")
const Installer     = require("./modules/Installer.js")
const CreatePackage = require("./modules/CreatePackage.js")

// Get CLI args
const args = ArgLib.getArgObject()

// Run the main script
const run = async () => {
  Installer.setup()
  switch (args.main) {
    case 'create-package':
      handleCommand([], CreatePackage.create)
      break
    case 'update-package':
      handleCommand([], CreatePackage.create)
      break
    case 'update-default-package':
      handleCommand([], CreatePackage.create)
      break
    case 'create-webpack':
      handleCommand([], CreatePackage.create)
      break
    case 'update-default-webpack':
      handleCommand([], CreatePackage.create)
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