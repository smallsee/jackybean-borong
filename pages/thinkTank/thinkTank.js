Page({
  skipMoreProfessor: function() {
    wx.navigateTo({
      url: 'professor-more/professor-more',
    })
  },
  skipProfessorDetail: function() {
    wx.navigateTo({
      url: 'professor-detail/professor-detail',
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
  }
})