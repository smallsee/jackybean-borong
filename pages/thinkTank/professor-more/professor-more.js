Page({
  data:{
    search: ''
  },
  onShareAppMessage: function () {
    return {
      title: '上市培育生态圈',
      desc: '上市培育生态圈!',
      imageUrl: '/images/icon/1.jpg',
      path: '/pages/index/index'
    }
  },
  onLoad: function (option) {
    var that = this;
    var search = option.search;
    if (search) {
      that.setData({
        search: search
      })
    }
    that.getData(that.data.search);
  },
  getData: function (search) {
    var that = this;
    wx.request({
      url: 'https://www.lifanh.com/api/brprofessor',
      data:{
        name: search
      },
      header: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          professors: res.data.data
        })
        console.log(that.data.professors)
      },
    })
  },
  skipProfessorDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../professor-detail/professor-detail?id=' + id,
    })
  },
  inputSearch: function (e) {
    this.setData({
      search: e.detail.value
    })
  },
  skipSearch: function () {
    var search = this.data.search
    this.getData(search)
  }
})