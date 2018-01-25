var WxParse = require('../../../untils/wxParse/wxParse.js');
var app = getApp();
Page({
  data:{
    data: {},
    showBack: false
  },
  onShareAppMessage: function () {
    var openid = app.globalData.openid;
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        wx.request({
          url: 'https://www.lifanh.com/api/brzhuanfa/' ,
          header: {},
          method: 'POST',
          data: {
            name: res.userInfo.nickName,
            thumb: res.userInfo.avatarUrl,
            professor: that.data.data.name,
            openid: openid
          },
          success: function (res_back) {
            console.log(res_back)
          },
        })
      }
    })

    return {
      title: '上市培育生态圈——' + that.data.data.name,
      desc: '上市培育生态圈——' + that.data.data.name,
      imageUrl: that.data.thumb,
      path: '/pages/thinkTank/professor-detail/professor-detail?id=' + that.data.id + '&showBack=true'
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
    var showBack = option.showBack
    if (showBack) {
      that.setData({
        showBack: true
      })
    }
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
          data: res.data.data,
          thumb: res.data.data.thumb
        })
        var content = res.data.data.case
        WxParse.wxParse('url', 'html', content, that, 20);
      },
    })
  },
  goback:function() {
    wx.switchTab({
      url: '../../index/index',
    })
  }
})