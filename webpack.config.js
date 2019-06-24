const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        chunkFilename: '[name].js'
        
    },

    devServer: {
      port: 3000 
    },
    
    module:{
        rules:[
          {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
    },
    
    plugins:[
        new htmlPlugin(
           {template: path.join(__dirname,'/src/index.html')}
        )
    ],
    
   optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
                chunks: 'all',
                test: /node_modules/
        }
      }
    }
  }
};