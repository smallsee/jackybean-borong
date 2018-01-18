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
        console.log(that.data.projects)
      },
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  skipProject: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'project-detail/project-detail?id=' + id,
    })
  }
})