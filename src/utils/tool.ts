// 格式化参数 对象用&拼接成字符串 - 只支持对象里面是基本类型的
export function formatParam(params: AnyObject) {
  let parameter = ''
  for (const key in params) {
    parameter += `${key}=${params[key]}&`
  }
  parameter = parameter.substr(0, parameter.length - 1)
  return parameter
}
