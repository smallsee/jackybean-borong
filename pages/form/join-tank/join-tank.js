Page({
  formSubmit: function(e) {
    var that = this;
    wx.request({
      url: 'https://www.lifanh.com/api/brtank',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: e.detail.value,
      success: function (res) {
        console.log(res)
        if (res.data.meta.errno == 0) {
          wx.showToast({
            title: '成功添加',
            icon: 'succes',
            duration: 1200,
            mask: true
          })
          that.setData({
            name: '',
            phone: '',
            company: '',
            desc: '',
            reason: ''
          })
        } else {
          wx.showToast({
            title: "填写出错了哦",
            duration: 2000,
            icon: "loading"
          })
        }
      }
    })
  },
  bindNameChange: function(e) {
    this.setData({

        name: e.detail.value
     
    })
  },
  bindPhoneChange: function (e) {
    this.setData({
  
        phone: e.detail.value
      
    })
  },
  bindCompanyChange: function (e) {
    this.setData({
   
        company: e.detail.value
      
    })
  },
  bindDescChange: function (e) {
    this.setData({
     
        desc: e.detail.value
      
    })
  },
  bindReasonChange: function (e) {
    this.setData({
     
        reason: e.detail.value
      
    })
  },
})