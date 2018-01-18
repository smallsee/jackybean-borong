App({
  globalData: {
    openid : ''
  },
  onLaunch: function () {
    var that = this;
    var openid = wx.getStorageSync('openId');
    if (openid) {
      that.globalData.openid = openid;
    } else {
      wx.login({
        success: function (res_login) {
          if (res_login.code) {
            wx.getUserInfo({
              success: function (res_user) {
                wx: wx.request({
                  url: 'https://www.lifanh.com/wx/login',
                  data: {
                    code: res_login.code,
                    encryptedData: res_user.encryptedData,
                    iv: res_user.iv
                  },
                  header: {
                    'content-type': 'application/json'
                  },
                  method: 'GET',
                  success: function (res) {
                    wx.setStorageSync('openId', res.data);
                    that.globalData.openid = openid;
                  },
                })
              }
            })
          }
        }
      })
    }

  }
})