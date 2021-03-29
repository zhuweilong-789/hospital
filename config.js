// 测试环境配置
const Glod = {
  BASE_SSO_URL: 'http://127.0.0.1:82/sso',
  BASE_AUTH_URL: 'http://127.0.0.1:81/authorize',
  GLOBAL: 'http://192.168.0.114:8080',
}
// 湘雅三生产环境配置 or 开发环境配置
// const ip = 'http://81.71.64.43'
// BASE_SSO_URL、BASE_AUTH_URL 端口由 ctms-web、gap-web 启动端口而定
// const Glod = {
//   BASE_SSO_URL: `${ip}:81/sso`,
//   BASE_AUTH_URL: `${ip}:80/authorize`,
//   GLOBAL: `${ip}:8080`,
// }
