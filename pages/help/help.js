//help.js
//获取应用实例
var app = getApp();
Page({
  data: {
    
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    //String2
  },
  contact:function(event){
    wx.makePhoneCall({
        phoneNumber: '02161409061' //仅为示例，并非真实的电话号码
    })
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    //String4
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    //String5
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    //String6
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    //String7
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    //String8
  }
})