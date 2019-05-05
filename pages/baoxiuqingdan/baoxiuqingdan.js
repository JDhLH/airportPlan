// pages/baoxiuqingdan/baoxiuqingdan.js
var sliderWidth = 96;
var config = require('../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["未受理", "已受理", "已完成"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
	 preReview: '',
	 pending: '',
	 completed: ''
  },
	onLoad: function (options) {
		var that = this;
		wx.getSystemInfo({
			success: function (res) {
				that.setData({
					sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
					sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
				});
			}
		});

		//1.待审核的方法
		this.preReviewFun();
		//2.待通过的方法
		this.pendingFun();
		//3.已完成的方法
		this.completedFun();

	},
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
	topage: function (e) {
		console.log(e.currentTarget.dataset.id);
		wx.navigateTo({
			url: '/pages/weishouli/weishouli?id='+e.currentTarget.dataset.id,
		})
	},

	preReviewFun:function (){
		var that = this;
		wx.request({
			url: config.service.getAllpreReviewFun,
			header: {//
				'Content-Type': 'application/json'
			},
			method: 'GET',
			// data: {},
			success: function (res) {
				var list = res.data;
				//console.log(list);
				if (list == null) {
					var toastText = '获取数据失败' + res.data.errMsg;
					wx.showToast({
						title: toastText,
						icon: 'loading',
						duration: 2000 //弹出时间
					})
				} else {
					//注意：赋值的时候，只有使用setDate方法时才能完成被生命周期监听
					that.setData({
						preReview:list
					});
				}
			}
		})
	},

	pendingFun: function (){
		var that = this;
		wx.request({
			url: config.service.getAllPendingFun,
			header: {//
				'Content-Type': 'application/json'
			},
			method: 'GET',
			// data: {},
			success: function (res) {
				var list = res.data;
				if (list == null) {
					var toastText = '获取数据失败' + res.data.errMsg;
					wx.showToast({
						title: toastText,
						icon: 'loading',
						duration: 2000 //弹出时间
					})
				} else {
					that.setData({
						pending: list
					});
				}
			}
		})  
	},

	completedFun: function (){
		var that = this;
		wx.request({
			url: config.service.getAllCompletedFun,
			header: {//
				'Content-Type': 'application/json'
			},
			method: 'GET',
			// data: {},
			success: function (res) {
				var list = res.data;
				if (list == null) {
					var toastText = '获取数据失败' + res.data.errMsg;
					wx.showToast({
						title: toastText,
						icon: 'loading',
						duration: 2000 //弹出时间
					})
				} else {
					that.setData({
						completed: list
					});
				}
			}
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