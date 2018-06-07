var app = getApp()

// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: null,
    latitude: null,
    lngLat: '',
    addrName: '未设置',
    name: null,
  },

  chooseLocation: function () {

    const successCallback = res => {
      if(res.name) this.data.addrName = res.name
      else if(res.address) this.data.addrName = res.address
      else this.data.addrName = '所选位置未命名' 


      this.data.longitude = res.longitude
      this.data.latitude = res.latitude
      this.data.lngLat = `(${res.longitude}, ${res.latitude})`

      console.log(res, this.data)
      this.setData(this.data )
    }

    wx.chooseLocation({success: successCallback})
  },

  /**
   * 表单提交
   */
  formSubmit: function(event){
    var inputName = event.detail.value.inputName
    if (inputName == '')
      inputName = "无名"
    
    const successCallback = (stone) => {
      console.log('add stone', stone)
      app.dataholder.addCemetery(stone)
      wx.switchTab({url: '/pages/main/main'})
    }

    app.requestAddStone(
      inputName, 
      90,
      [this.data.longitude, this.data.latitude],
      this.data.addrName,
      successCallback,
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})