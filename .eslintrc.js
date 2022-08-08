module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential', // 使用 essential 規範
    'eslint:recommended', // 使用 ESLint 推薦規範
    '@vue/prettier', //使用 prettier
  ],
  parserOptions: {
    parser: '@babel/eslint-parser', // 設定 ESLint 解析器
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
