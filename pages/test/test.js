Page({

  getPhoneNumber: function (e) {

    wx.login({
      success: function(res_login){
        if (res_login.code) {
          wx.getUserInfo({
            success: function(res_user) {
              wx:wx.request({
                url: 'https://www.lifanh.com/wx/login',
                data: {
                  code: res_login.code,
                  encryptedData: res_user.encryptedData,
                  iv: res_user.iv
                },
                header: {
                  'content-type': 'application/json'
                },
                method: 'GET',
                success: function(res) {
                  wx.setStorageSync('openId', res.data);
                },
              })
            }
          })    
        }
      }
    })

  },
  //播放  
  listenerButtonPlay: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38',
      title: '薛之谦',
      //图片地址地址  
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000'

    })
  },
  //监听button暂停按钮  
  listenerButtonPause: function () {
    wx.pauseBackgroundAudio({
    });
    console.log('暂停播放')
  },
  /**  
   * 播放状态  
   */
  listenerButtonGetPlayState: function () {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        // success  
        //duration  选定音频的长度（单位：s），只有在当前有音乐播放时返回  
        console.log('duration:' + res.duration)
        console.log('currentPosition:' + res.currentPosition)
        //status    播放状态（2：没有音乐在播放，1：播放中，0：暂停中）  
        console.log('status:' + res.status)
        console.log('downloadPercent:' + res.downloadPercent)
        //dataUrl   歌曲数据链接，只有在当前有音乐播放时返回   
        console.log('dataUrl:' + res.dataUrl)
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  },
  /**  
   * 设置进度  
   */
  listenerButtonSeek: function () {
    wx.seekBackgroundAudio({
      position: 40
    })
  },
  /**  
   * 停止播放  
   */
  listenerButtonStop: function () {
    wx.stopBackgroundAudio({
    })
    console.log('停止播放')
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数    
    /**   
     * 监听音乐播放   
     */
    wx.onBackgroundAudioPlay(function () {
      // callback  
      console.log('onBackgroundAudioPlay')
    })
    /**  
     * 监听音乐暂停  
     */
    wx.onBackgroundAudioPause(function () {
      // callback  
      console.log('onBackgroundAudioPause')
    })
    /**  
     * 监听音乐停止  
     */
    wx.onBackgroundAudioStop(function () {
      // callback  
      console.log('onBackgroundAudioStop')
    })
  }  
})