# BRG Packaging

This adds a way to easily create default packages / dependencies and use them when creating new projects. After all, no one likes to copy/paste their normal list of dependencies.

## Commands

### Create New Package

Command: `brg-packaging create-package`

This creates a new "package.json" file at the current location. Uses the default package file as the template. 

Takes in no parameters.

### List Package Dependencies

Command: `brg-packaging list`

Lists the default package dependencies (and dev dependencies)

Takes no arguments

### Update Package Dependencies

Command: `brg-packaging update-package-dep --action=<action> --dep=<dependency-name> --value=<value>`

Update a single dependency in the default package.json template.

### Save Default Package

Command: `brg-packaging update-package --file=<new-template-file>`

Set's the contents of the default package.json template

### Create Webpack File

Command: `brg-packaging create-webpack`

This creates a new "webpack.config.js" file at the current location. Uses the default webpack file as the template. 

Takes in no parameters.

### Set Default Webpack File

Command: `brg-packaging update-webpack --file=<new-template-file>`

This sets the default webpack file contents to be the contents of another file. 

Arguements: 

* --file: this is the file to use as the new default webpack template (optional, default is 'webpack.config.js')