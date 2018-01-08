Page({
  skipPerson: function(e) {
    console.log('s')
    wx:wx.navigateTo({
      url: '../personal/personal',
    })
  }
})