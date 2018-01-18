Page({
  data: {
    newsData:[]
  },
  onShareAppMessage: function () {
    return {
      title: '上市培育生态圈',
      desc: '上市培育生态圈!',
      imageUrl: '/images/icon/1.jpg',
      path: '/pages/index/index'
    }
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=caijing&key=08d9bc60812ba4520fcc39c359ddb3a9', //仅为示例，并非真实的接口地址
      method: "GET",
      success: function (res) {
      
        if (res.data.result.stat == 1) {
          var data = []
          data = res.data.result.data.slice(0,6)
          that.setData({
            newsData: data
          })
          var url = that.data.newsData[0].url;
          
        }
      }
    })
 
  },
  skipWeb: function(e) {

    var postId = e.currentTarget.dataset.postid;
    // console.log("on post id is" + postId);
    wx.navigateTo({
      url: "../webview/webview?id=" + postId
    })
  },
  skipPerson: function(e) {
    wx:wx.navigateTo({
      url: '../personal/personal',
    })
  },
  skipTank: function(){
    wx.switchTab({
      url: '../thinkTank/thinkTank',
    })
  },
  inputSearch: function (e) {
    this.setData({
      search: e.detail.value
    })
  },
  skipSearch: function () {
    var search = this.data.search
    wx.navigateTo({
      url: '../thinkTank/professor-more/professor-more?search=' + search,
    })
  }
})