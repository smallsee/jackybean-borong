Page({
  data: {
    user: false,
    userInfo: false
  },
  onLoad: function () {
    var that = this
    var name = ''
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          user: res.userInfo
        })

        var userInfo = wx.getStorageSync('userInfo')
        if (userInfo) {
          userInfo = JSON.parse(userInfo)
          that.setData({
            userInfo: userInfo
          })
          that.isUser(userInfo, res.userInfo.nickName)
        }

      }
    })
  },
  isUser: function (userInfo,name) {
    var that = this;
    if (userInfo.name == name) {
      that.setData({
        userInfo: userInfo
      })
      console.log(userInfo)
    }
  }
})