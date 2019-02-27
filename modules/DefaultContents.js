// Library helpers
const shell     = require("shelljs")
const inquirer  = require("inquirer")
const chalk     = require("chalk")
// custom settings
const settings  = require("./Settings.js")

module.exports = {
  displayDefaults: () => {
    let packageFile = `${settings.settingsFolder}/${settings.settingsPackageFile}`
    if (shell.test('-f', packageFile)) {
      let rawContent = shell.cat(packageFile)
      let content    = JSON.parse(rawContent)
      console.log(`Dependencies: ${JSON.stringify(content.dependencies, null, 2)}\nDev Dependencies:${JSON.stringify(content.devDependencies, null, 2)}`)
    } else {
      console.log(chalk.red(`Error: package file (${packageFile}) doesn't exist!`))
    }
  },
  defaultPackageContent: `{
  "name": "name",
  "version": "1.0.0",
  "description": "",
  "main": "./index.js",
  "scripts": {
    "test": "echo 'Error: no test specified' && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^1.0.0",
    "dialogr": "^1.1.3",
    "dompurify": "^1.0.8",
    "extract-loader": "^3.0.0",
    "file-loader": "^2.0.0",
    "mini-css-extract-plugin": "^0.4.4",
    "node-sass": "^4.9.3",
    "react": "^16.6.0",
    "react-dom": "^16.6.0",
    "redux": "^4.0.1",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.0"
  }
}`,
  defaultWebpackContent: `const path = require('path');

module.exports = {
    entry: {
        // Main front facing script
        'index': './src/scripts/index.js',
        // Styles
        'main': './src/styles/main.scss'
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'build')
    }, 
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-env', 'babel-preset-react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].css",
                        },
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            publicPath: "../",
                        }
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        } 
                    }
                ],
            }
        ]
    },
    mode: 'development'
}`,
  helpContent: `Here's a list of possible commands:
list
create-package
update-package-dep
update-package
create-webpack
update-webpack`
}