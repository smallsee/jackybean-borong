Page({
  data: {
    navbar: ['推荐', '市场', '行业', '公司', '研究', '学院'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  skipProject: function(e) {
    wx.navigateTo({
      url: 'project-detail/project-detail',
    })
  }
})