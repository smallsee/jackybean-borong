var WxParse = require('../../../untils/wxParse/wxParse.js');
Page({
  data:{
    data: {}
  },
  onShareAppMessage: function () {
    var that = this;
    return {
      title: '上市培育生态圈',
      desc: '上市培育生态圈!',
      imageUrl: '/images/icon/1.jpg',
      path: '/pages/thinkTank/professor-detail/professor-detail?id=' + that.data.id
    }
  },
  skipOrderProfessor: function () {
    wx.navigateTo({
      url: '../../form/order-professor/order-professor',
    })
  },
  onLoad: function(option) {
    var that = this;
    var id = option.id
    that.setData({
      id: id
    })
    // var id = 1;
    wx.request({
      url: 'https://www.lifanh.com/api/brprofessor/' + id,
      header: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          data: res.data.data
        })
        var content = res.data.data.case
        WxParse.wxParse('url', 'html', content, that, 0);
      },
    })
  }
})