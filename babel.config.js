module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json'
        ],
        alias: {
          '@app': './src/app',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@screens': './src/app/screens',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@interfaces': './src/interfaces',
          '@redux': './src/redux'
        }
      }
    ]
  ]
};
