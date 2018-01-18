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
  },
  skipFloor: function() {
   wx.navigateTo({
     url: '/pages/onlineConsult/onlineConsult?type=floor',
   })
  },
  skipTank: function () {
    wx.navigateTo({
      url: '/pages/onlineConsult/onlineConsult?type=tank',
    })
  },
  skipOrderProfessor: function () {
    wx.navigateTo({
      url: '/pages/onlineConsult/onlineConsult?type=orderprofessor',
    })
  },
})