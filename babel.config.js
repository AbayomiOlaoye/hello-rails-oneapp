module.exports = {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', '@babel/preset-react', { targets: "defaults" }]
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    }
  ]
};
