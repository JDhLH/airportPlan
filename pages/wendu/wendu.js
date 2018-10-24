// pages/wendu/wendu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("page onload");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("page onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTem();
    console.log("onshow");

  //   console.log("page onshow");
  //   wx.request({
  //     url: 'https://localhost:8080/ariport/tem/selectTem.do',
  //     mothod: "POST",
  //     header: {
  //       "content-type": "application/x-www-form-urlencoded"
  //     },
  //     success: this.getTemSucc.bind(this)
  //   })
  // },
  // getTemSucc(res){
  //   var result = res.data.data;
  //   var that=this;
  //   for(var i in result){
  //     switch(result[i].locationId){
  //       case 1:
  //         result[i].locationId="中国";
  //         break;
  //       case 2:
  //         result[i].locationId = "巴西";
  //         break;
  //       case 3:
  //         result[i].locationId = "日本";
  //         break;
  //       default: 
  //     }
  //   }
  //   this.setData({
  //     list: result
  //   })
  },

  getTem() {
    wx.request({
      url: 'https://224r34952t.51mypc.cn/temFindAll',
      mothod: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: this.getTemSucc.bind(this)
    })
  },

  getTemSucc(res) {
    console.log(res);
    var result = res.data;
    console.log(result);
    var that = this;
    for (var index in result) {
      var d = new Date(result[index].datetime);
      var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() +
        ':' + d.getMinutes() + ':' + d.getSeconds();
      result[index].datetime = times;
    }
    this.setData({
      list: result
    })
  },

  handleRefresh(e) {
    console.log("---->id:" + e.currentTarget.id);
    wx.navigateTo({
      url: '/pages/fabuwendu/fabuwendu?id=' + e.currentTarget.id,

    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("page onhide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("page onunLoad");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("page onpullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("page onreachbottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("page onshareAppMessage");
  }
})