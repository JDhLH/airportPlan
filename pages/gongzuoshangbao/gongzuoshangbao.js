// pages/gongzuoshangbao/gongzuoshangbao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
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
    this.getReport();
  },
  getReport(){
    wx.request({
      url: 'https://224r34952t.51mypc.cn/findAllReport',
      mothod: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: this.getDutySucc.bind(this)
    })
    console.log("getReport");
  },
  getDutySucc(res) {
    console.log(res);
    var result = res.data;
    console.log(result);
    var that = this;
    for(var index in result){
      var d=new Date(result[index].date);
      var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()          + ':' + d.getSeconds(); 
      result[index].date=times;
    }
    this.setData({
      list: result
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