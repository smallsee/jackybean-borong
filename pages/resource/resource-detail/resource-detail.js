var WxParse = require('../../../untils/wxParse/wxParse.js');
Page({
  data: {
    data: {}
  },
  onLoad: function (option) {
    var that = this;
    var id = option.id
    // var id = 1
    wx.request({
      url: 'https://www.lifanh.com/api/brresource/' + id,
      header: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          data: res.data.data
        })
        var content = res.data.data.content
        WxParse.wxParse('url', 'html', content, that, 0);
      },
    })
  }
})