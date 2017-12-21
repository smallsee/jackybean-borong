Page({
  data: {
    phone:'',
    consult: ''
  },
  phoneInput: function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  consultInput: function (e) {
    this.setData({
      consult: e.detail.value
    })
  },
  onLoad: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          name: res.userInfo.nickName,
        })
      }
    })
  },
  /**
   * 提交表单
   */
  onSubmit: function() { 
    var phone = this.data.phone;
    var consult = this.data.consult;
    var pass = this.detection(phone, consult)
    if (pass) {
      this.geLocalPhone(phone, consult);
    }
  },
  /**
   * 检测输入进来的值是否有问题
   */
  detection: function (phone, consult) {
    var phoneRule = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; 
    if (!phone) {
      wx.showToast({
        title: "电话不能为空哦",
        duration: 1000,
        icon: "loading"
      })
      return false
    } else if (phone.length != 11){
      wx.showToast({
        title: "手机长度不对哦",
        duration: 1000,
        icon: "loading"
      })
      return false
    } else if (!phoneRule.test(phone)) {  
      wx.showToast({
        title: '手机号有误！',
        icon: 'loading',
        duration: 1000
      })
      return false
    }
    if (!consult) {
      wx.showToast({
        title: "啥都不咨询下么",
        duration: 1000,
        icon: "loading"
      })
      return false
    }

    return true
  },
  /**
   * 获取本地储存并且加入数据
   */
  geLocalPhone: function (phone,consultText) {
    var that = this;
    var userInfo = wx.getStorageSync('userInfo')
    var name = this.data.name
    if (!name) {
      name = '未知人'
    }
    if (!userInfo) {
      userInfo = {};
      userInfo['consult'] = []
    }else{
      userInfo = JSON.parse(userInfo)
    }
    userInfo['name'] = name;
    var consult = {}
    consult['consult'] = consultText
    consult['phone'] = phone
    userInfo['consult'].push(consult)
    var user = JSON.stringify(userInfo)
    wx.setStorageSync('userInfo', user);

    this.setValue()
  },
  /**
   * 设置选项栏的值，并且提醒成功
   */
  setValue: function() {
    this.setData({
      phone: '',
      consult: ''
    })
    wx.showToast({
      title: "提交成功",
      duration: 1000,
      icon: "success"
    })
  }
})