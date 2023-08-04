module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    'no-extra-semi': 2, // 禁止多余的冒号
    'init-declarations': ['error', 'always'], // 声明变了必须赋值
    'no-var': 'error', // 禁用 var 声明
    'no-alert': 2, //禁止使用alert confirm prompt
    'no-bitwise': 0, //禁止使用按位运算符
    'no-catch-shadow': 2, //禁止catch子句参数与外部作用域变量同名
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    'array-callback-return': 2, // Array的方法需要有return返回值时,禁止没有返回值的函数，如果不需要，请用其他代替
    'no-await-in-loop': 2, // 禁止在循环中使用 await 等待函数
    'no-constant-binary-expression': 2,
    'no-constructor-return': 2,
    'no-duplicate-imports': 2, // 禁止使用多个 import 导入 同一个模块中的方法
    'no-promise-executor-return': 2, // 禁止在 Promise 中使用 return
    'no-self-compare': 2, // 禁止变量自身比较 如果要判断NaN 请用其他方法
    'no-template-curly-in-string': 2, // 禁止在 "" '' 字符串中 使用 ${} 模版字符串
    'valid-typeof': 2, // 强制将 typeof 表达式 与 有效的字符串 做比较
    eqeqeq: [2, 'allow-null'], // 必须使用全等于
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'] // 需要忽略的组件名
      }
    ]
  },
  globals: {
    getApp: 'readonly',
    getCurrentPages: 'readonly',
    uni: 'readonly',
    wx: 'readonly',
    tt: 'readonly',
    my: 'readonly',
    swan: 'readonly'
  }
}
