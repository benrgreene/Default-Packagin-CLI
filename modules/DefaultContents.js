module.exports = {
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
    "babel-polyfill": "^6.0.16",
    "babel-preset-es2015": "^6.0.15",
    "babel-preset-stage-0": "^6.0.15",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "webpack": "^4.18.0",
    "webpack-cli": "^3.1.0"
  },
  "dependencies": {
    "chalk": "^2.4.2",
    "download-git-repo": "^1.1.0",
    "inquirer": "^6.2.2",
    "shelljs": "^0.8.3"
  }
}`,
  defaultWebpackContent: `const path = require('path');

module.exports = {
    entry: {
        'index': './src/index.js',
        'app': './src/app.js',
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
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    mode: 'development'
}`
}