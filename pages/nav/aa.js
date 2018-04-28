Page({
  data: {
    animationData: {},
    lock : 1,
    idx : 1,
    catalogs: [{ "catalogName": "卡其卡其", "select": 1 }, { "catalogName": "其卡其卡卡其卡其", "select": 2 }, { "catalogName": "鲤鱼鲤鱼", "select": 3 }, { "catalogName": "神迹神迹卡其卡其", "select": 4 },], catalogSelect: 0,
  },
  showanimate:function(evet) {
    this.rotateAndScale()
    if(this.data.lock){
      this.setData({
        lock:0
      })
      if (this.data.idx){
        this.setData({
          idx: 0
        })
      }else{
        this.setData({
          idx: 1
        })
      }
    }
    console.log(this.data.lock)
  },
  chooseCatalog: function (data) {
    var that = this; that.setData({catalogSelect : data.currentTarget.dataset.select }) },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(30).step()
     

    }.bind(this), 1000)
    
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },


})