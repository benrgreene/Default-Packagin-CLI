module.exports = {
  help: (args) => {
    let command = args.command
    switch (command) {
      case "list":
        console.log('Lists all dependencies and devDependencies in the default package.json template file. Takes no parameters.')
        break
      case "create-package":
        console.log('Create a package in the current directory using the default package.json template. Takes no parameters.')
        break
      case "update-package-dep":
        console.log(`Update a single dependency in the default package.json template.

Arguements:
* action: options are 'add', 'update', and 'remove'. 
* dep: the dependency to modify.
* value: the new value for the dependency (only applies if action is 'add' or 'update').
* isDev: whether the dependency is a dependency or a devDependency. Default is for devDependency.`)
        break
      case "update-package":
        console.log(`Update the default package.json template to match a local file. Default is the package.json in the current working directory

Arguements:
* file: the file to use to update the default package.json template.`)
        break
      case "create-webpack":
        console.log('Create a webpack config in the current directory using the default package.json template. Takes no parameters.')
        break
      case "update-webpack":
        console.log(`Update the default webpack config template to match a local file. Default is the webpack.config.js in the current working directory.

Arguements:
* file: the file to use to update the default webpack.config.js template.`)
        break
    }
  }
}