Page({
  data: {
    user: false
  },
  onLoad: function () {
    var that = this;
    wx.login({
      success: function (res) {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              user: res.userInfo
            })
          }
        })
      }
    });
    
  },
  onLogin: function() {
    wx.checkSession({
        success: function () {
          //session 未过期，并且在本生命周期一直有效
        },
        fail: function () {
          //登录态过期
          wx.login() //重新登录
        }
      })
  },
  onlineConsult: function() {
   wx.navigateTo({
     url: '/pages/onlineConsult/onlineConsult',
   })
  }
})