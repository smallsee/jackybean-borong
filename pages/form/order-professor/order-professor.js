var app = getApp();
Page({
  data:{
    array: ['美国', '中国', '巴西', '日本'],
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'https://www.lifanh.com/api/brprofessor',
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
  formSubmit: function (e) {
    var that = this;
    var openid = app.globalData.openid;
    e.detail.value['openid'] = openid
    console.log(e.detail.value)
    wx.request({
      url: 'https://www.lifanh.com/api/brorderprofes',
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindNameChange: function (e) {
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