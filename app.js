const Authorize = require('./utils/authorize.js')
const Dataholder = require('./utils/dataholder.js')

App({
  userInfo: false,
  dataholder: false,
  authorize: false,

  onLaunch: function() {
    this.init()
    this.userLogin()
    this.getSetting()
  },

  init: function(){
    this.authorize = new Authorize()
    this.dataholder = new Dataholder()
    this.dataholder.initCemetery()
  },
  
  userLogin: function(){
    wx.login({
      success: res => {
        console.log('userLogin', res)
        this.requestOpenId(res.code)
      }
    })
  },
  
  requestOpenId: function(code){
    const successCallback = (res) => {
      const serverMsg = res.data
      if(serverMsg.ok){
        const openId = serverMsg.data.openid 
        console.log(this)
        this.authorize.setOpenId(openId)
      }
    }

    wx.request({
      url: 'http://localhost/api/openId',
      data: {code},
      header: {
          'content-type': 'application/json'
      },
      success: successCallback
    })
  },
  
  getSetting: function(){
    wx.getSetting(res => {
      console.log('userSetting', res)
    })
  },
  
  getUserInfo: function(){
    wx.getUserInfo({
      success: res => {
        console.log('userInfo', res)
      }
    })
  },
  
  requestServer: function() {
    wx.request({
      //url: 'http://203.195.207.74/api/stones',
      url: 'http://localhost/api/stones',
      success: (res) => {console.log('success')},
      fail: () => {console.log('err')},
      complete: () => {console.log('compelte')}
    })
  }
})



/*
const appStructure = {
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log('login', res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('getsetting', res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          //
        }
      }
    })

    var DataHolder = require('./DataHolder.js')
    this.dataHolder = new DataHolder()
    this.dataHolder.initCemetery()
  },

  // app global variable
  globalData: {
    userInfo: null
  },
  userInfo: null,
  dataHolder: null,

  // 获取用户数据成功的毁掉函数
  userInfoReadyCallback(){
    console.log('userinfo:', this.globalData.userInfo)
  },

  // 请求获取用户数据
  requestUserInfo(){

  }
}
*/