// pages/recore/recore.js
var config = require('../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rpPhone:''
  },

  topage:function(e){
    wx.redirectTo({
      url: '/pages/baoxiuqingdan/baoxiuqingdan',
    })
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
    var that = this;
    wx.request({
      url: config.service.getAllRecoreUrl,
      header: {//
        'Content-Type': 'application/json'
      },
      method: 'GET',
      // data: {},
      success: function (res) {
        console.log(res);
        var list = res.data;
        console.log(list);
        for (var index in list) {
          var d = new Date(list[index].time);//不调用这个会出现其中给一个函数没有定义的问题
		  console.log(d);
          /*result[index].dateTime = util.formatTime(commentTime,'Y-M-D');*/
          var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          list[index].time = times;
        }
        if (list == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: 'loading',
            duration: 2000 //弹出时间
          })
        } else {
          that.setData({
            rpPhone: list
          })
        }
      }
    })  
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