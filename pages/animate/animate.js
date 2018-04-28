// pages/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeData:[
      {
        name:'四个春天',
        id:'110',
        select:"1",
        animation:'one',
        desc:"h黑猫娱乐新片"
      }, {
        name: '放羊',
        id: '1102',
        select: "2",
        animation: 'two',
        desc: "五一上映"
      }, {
        name: '声色',
        id: '1101',
        select: "3",
        animation: 'tree',
        desc: "北京声色实记"
      }, {
        name: '报春',
        id: '110',
        select: "4",
        animation: 'fron',
        desc: "怀抱春天"
      },
      {
        name: '四个春天',
        id: '110',
        select: "1",
        animation: 'one',
        desc: "h黑猫娱乐新片"
      }, {
        name: '放羊',
        id: '1102',
        select: "2",
        animation: 'two',
        desc: "五一上映"
      }, {
        name: '声色',
        id: '1101',
        select: "3",
        animation: 'tree',
        desc: "北京声色实记"
      }, {
        name: '报春',
        id: '110',
        select: "4",
        animation: 'fron',
        desc: "怀抱春天"
      }
    ],
    colorArr: ["#40a851", "#000", "#ca3547", "#2b86e5", "#fdab3e", "#fc4359", "#2b86e5", "#000", "#40a851"],
    animationData:{},
    idx:999
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.getRandomColor())
  },
  getRandomColor : function () {

    return   '#' + Math.floor(Math.random() * 16777215).toString(16); 
  }, 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    // wx.showNavigationBarLoading()
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#ff0000',
    //   animation: {
    //     duration: 400,
    //     timingFunc: 'easeIn'
    //   }
    // })
    this.animation = animation
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },
  onPageScroll: function (event) {
    var scrollTop = event.scrollTop;
    console.log(scrollTop)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  startAnimate:function(event) {
  
    wx.createSelectorQuery().selectViewport().scrollOffset(function (res) {
      res.id      // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
      console.log(res)
      
    }).exec()
    // this.animation.scale(2,2).rotate(45).step()
    // this.setData({
    //   animationData : this.animation.export()
    // })
    var that = this; that.setData({ idx: event.currentTarget.dataset.select })
  console.log(event)
  }
})