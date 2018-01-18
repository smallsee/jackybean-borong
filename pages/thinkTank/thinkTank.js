Page({
  data: {
    professors: []
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
      url: 'https://www.lifanh.com/api/brprofessor',
      header: {},
      method: 'GET',
      success: function(res) {
        that.setData({
          professors: res.data.data.slice(0,2)
        })
      },
    })
  },
  skipMoreProfessor: function() {
    wx.navigateTo({
      url: 'professor-more/professor-more',
    })
  },
  skipProfessorDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'professor-detail/professor-detail?id=' + id,
    })
  },
  skipOrderProfessor: function() {
    wx.navigateTo({
      url: '../form/order-professor/order-professor',
    })
  },
  callPhone: function() {
    wx.makePhoneCall({
      phoneNumber: '020-38899589' //仅为示例，并非真实的电话号码
    })
  },
  skipJoinTank: function() {
    wx.navigateTo({
      url: '../form/join-tank/join-tank',
    })
  },
  inputSearch: function(e) {
    this.setData({
      search: e.detail.value
    })
  },
  skipSearch: function() {
    var search = this.data.search
    wx.navigateTo({
      url: 'professor-more/professor-more?search=' + search,
    })
  }
})