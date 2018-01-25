var app = getApp();
Page({
  data: {
    navbar: ['推荐', '行业', '规模', '需求', '收藏'],
    currentTab: 0
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.lifanh.com/api/brproject',
      header: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          projects: res.data.data
        })
    
      },
    })
  },
  navbarTap: function (e) {
    var openid = app.globalData.openid;
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    if (this.data.currentTab == 4) {
      var that = this;
      wx.request({
        url: 'https://www.lifanh.com/api/brwxproject/getfav?openid=' + openid,
        header: {},
        method: 'GET',
        success: function (res) {
          that.setData({
            fav: res.data.wx_user_projects
          })
        
        },
      })
    }
  },
  skipProject: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'project-detail/project-detail?id=' + id,
    })
  }
})