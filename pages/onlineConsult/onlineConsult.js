var app = getApp();
Page({
  data: {
    user: false,
    userInfo: false,
  },
  onLoad: function (option) {
    var that = this
    var openid = app.globalData.openid;
    var type = option.type
    console.log(type)
    
    wx.request({
      url: 'https://www.lifanh.com/api/brformsearch/',
      header: {},
      data:{
        'type': type,
        'openid': openid
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          data: res.data.data
        })
      },
      
    })


    wx.getUserInfo({
      success: function (res) {
        that.setData({
          user: res.userInfo
        })
      }
    });
  }
})