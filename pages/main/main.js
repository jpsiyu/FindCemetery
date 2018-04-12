// pages/main/main.js
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cemetery = [
      { id: 1001, name: 'Tom', addr: [30, 50] },
      { id: 1002, name: 'Max', addr: [18, 32] },
      { id: 1003, name: 'Ryu', addr: [50, 72] },
      { id: 1003, name: 'Ryu', addr: [50, 72] },
      { id: 1003, name: 'Ryu', addr: [50, 72] },
      { id: 1003, name: 'Ryu', addr: [50, 72] },
      { id: 1003, name: 'Ryu', addr: [50, 72] },
    ]

    this.setData({gridHeight: this.calGridWidth()})
    this.setData({cemetery:cemetery})
  },

  calGridWidth: function(){
    var ww = util.getWindowWidth()
    return ww * 0.48
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