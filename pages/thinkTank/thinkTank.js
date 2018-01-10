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
  }
})