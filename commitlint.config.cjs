module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示git提交的type必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', //新功能
        'fix', //修复bug
        'docx', //文档变更
        'style', //修改代码格式，不影响代码逻辑
        'refactor', //代码重构，理论上不影响功能逻辑
        'perf', //性能优化
        'test', //增加测试
        'chore', //构建或其他工具的变动(如webpack)
        'revert', //还原以前的提交
        'build' //打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
