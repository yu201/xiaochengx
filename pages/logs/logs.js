//logs.js
const util = require('../../utils/util.js')
const API = require('../../utils/request.js')
Page({
  data: {
    logs: [],
    imgs: ['https://test-1256132698.cos.ap-beijing.myqcloud.com/images/init1.jpg', 'https://test-1256132698.cos.ap-beijing.myqcloud.com/images/init2.jpg','https://test-1256132698.cos.ap-beijing.myqcloud.com/images/init3.jpg'],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    }),
    API.Get('/api/h5/v1/bcat/wrongAnswer/list', {
      instanceId: '20180208135501102001',
      contentType: 'fq_qa_instance',
      nonce: 'bsz5hpy6fgo',
      timestamp: '1520304170043',
      signature: 'DzdnXe5yNWdZ3VcWSxZVuN3lgp7S7hfVIDzd2iXblso='
    }).then((res)=>{
      console.log(res)
    }).catch(err => {
        console.log(err);
    });
    // wx.request({
    //   url: 'http://39.106.59.115:8880/api/h5/v1/bcat/wrongAnswer/list',
    //   method:'POST',
    //   header:{
    //     'content-type': 'application/x-www-form-urlencoded',
    //   },
    //   data:{
    //     instanceId:'20180208135501102001',
    //     contentType:'fq_qa_instance',
    //     nonce:'bsz5hpy6fgo',
    //     timestamp:'1520304170043',
    //     signature:'DzdnXe5yNWdZ3VcWSxZVuN3lgp7S7hfVIDzd2iXblso='
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  }
})
