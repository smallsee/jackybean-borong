var WxParse = require('../../../untils/wxParse/wxParse.js');
var app = getApp();
Page({
  data: {

      hasFav: false
 
  },
  onFav: function() {
    var openid = app.globalData.openid;
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        wx.request({
          url: 'https://www.lifanh.com/api/brwxproject/',
          header: {},
          method: 'POST',
          data: {
            name: res.userInfo.nickName,
            avatar: res.userInfo.avatarUrl,
            thumb: that.data.data.thumb,
            project: that.data.data.name,
            project_id: that.data.data.id,
            openid: openid
          },
          success: function (res_back) {
            if (res_back.data.meta.errno == 3) {
              that.setData({
                hasFav: false
              })
            }else{
              that.setData({
                hasFav: true
              })
            }
        
          },
        })
      }
    })
  },
  onLoad: function (option) {
    var that = this;
    var openid = app.globalData.openid;
    var id = option.id
    that.setData({
      id: id
    })
    // var id = 1
    wx.request({
      url: 'https://www.lifanh.com/api/brproject/' + id,
      header: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          data: res.data.data
        })
        var content = res.data.data.content
        WxParse.wxParse('url', 'html', content, that, 20);
        that.hasFav(openid, res.data.data.name)
      },
    })
  },
  hasFav: function(openid, project) {
    var that =this;
    wx.request({
      url: 'https://www.lifanh.com/api/brwxproject/hasfav',
      header: {},
      method: 'GET',
      data:{
        openid: openid,
        project: project
      },
      success: function (res) {
        if (res.data.meta.errno === 0){
          that.setData({
            hasFav: true
          })
        }else{
          that.setData({
            hasFav: false
          })
        }
        
        console.log(that.data.hasFav)
      },
    })
  }
})