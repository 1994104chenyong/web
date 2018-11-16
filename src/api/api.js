import axios from './axios'
const requests = {
  getUser (data = {}) {
    // user 请求接口
    return axios('user', {
      // 请求方法
      method: 'get',
      // 请求体
      data: data
    })
  }
}
// 导出对象，然后在全局注册或在单个vue文件下调用
export default requests
