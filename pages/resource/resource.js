Page({
  data: {
    navbar: ['推荐', '投资人', '券商', '经纪人', '律师', '会计'],
    currentTab: 0
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.lifanh.com/api/brresource',
      header: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          data: res.data.data
        })
        console.log(that.data.data)
      },
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  skipUser: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'resource-detail/resource-detail?id=' + id,
    })
  },
  skipJoinFloor: function () {
    wx.navigateTo({
      url: '../form/join-floor/join-floor',
    })
  }
})