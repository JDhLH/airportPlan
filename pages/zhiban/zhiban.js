// pages/zhiban/zhiban.js
var util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataTime:"2018-09-22",
    list:[],
    dateTime:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getduty();
    console.log("onload");
  },
  getduty(){
    wx.request({
      url: 'https://224r34952t.51mypc.cn/findAllDuty',
      mothod: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: this.getDutySucc.bind(this)
    })
    console.log("getduty");
  },
  getDutySucc(res) {
    console.log(res);
    var result = res.data;
    console.log(result);
    var that=this;
    for (var index in result) {
      var d = new Date(result[index].datetime);//不调用这个会出现其中给一个函数没有定义的问题
      /*result[index].dateTime = util.formatTime(commentTime,'Y-M-D');*/
      var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()        + ':' + d.getSeconds();
      result[index].datetime = times;
    }
    this.setData({
      list:result
    })
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  fanhui:function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
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
