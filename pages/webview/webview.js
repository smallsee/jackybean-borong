var WxParse = require('../../untils/wxParse/wxParse.js');
Page({
  data:{
    url: ''
  },
  onLoad: function(option) {
    var that = this;
    var postId = option.id;
    var article = '<div>哇</div>';
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=caijing&key=08d9bc60812ba4520fcc39c359ddb3a9', //仅为示例，并非真实的接口地址
      method: "GET",
      success: function (res) {
        if (res.data.result.stat == 1) {
          var data = []
          data = res.data.result.data.slice(0, 6)
          var url = data[postId].url.replace('http', 'https')
          wx.request({
            url: url,
            success: function (res) {
              article = res.data.replace('<!DOCTYPE html>', '')
              WxParse.wxParse('url', 'html', article, that, 0);
            }
          })
        }
      }
    })

  

    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */

    
  }
})