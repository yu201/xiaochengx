/**
 * @desc    API请求接口类封装
 * @author  huangyu
 * @date    2018-03-06
 */
/**
 * @baseURL    环境地址
 */
const baseURL ='http://39.106.59.115:8880'
/**
 * POST请求API
 */
function Post(url, params) {
  requestApi(url, params, 'POST')
}

/**
 * GET请求API
 */
function Get(url, params) {
   return requestApi(url, params, 'GET')
}

/**
 * 请求API
 * @param  {String}   url         接口地址
 * @param  {Object}   params      请求的参数
 */
function requestApi(url, params, method) {
  return new Promise((resolve, reject) => {
    if (method == 'POST') {
      var contentType = 'application/x-www-form-urlencoded'
    } else {
      var contentType = 'application/json'
    }
    wx.request({
      url: baseURL + url,
      method: method,
      data: params,
      header: { 'Content-Type': contentType },
      success: function (res) {
        resolve(res.data);
      },
      fail: function (res) {
        reject(res);
      }
    })
  })
  
}

module.exports = {
  Post,
  Get
}