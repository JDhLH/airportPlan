//index.js
//获取应用实例
const app = getApp()
var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
Page({
  data: {
    indicatorDots: true,//表示是否显示图片的这几个点
    autoplay: true,//设置是否自动切换
    interval: 3000,//自动切换时间间隔
    duration: 100,//滑动动画时长
    sugData: '',
    markers: [],
    latitude: '',
    longitude: '',
    rgcData: {},
    title: "桂林机场维修服务平台",
    "banner_list": [{
        "banner": [{
            "pic_url": "/pages/image/1.jpg",
          },
          {
            "pic_url": "/pages/image/2.jpg",
          },
          {
            "pic_url": "/pages/image/3.jpg",
          },
          {
            "pic_url": "/pages/image/4.jpg",
          }
        ]
      },
      {

      }
    ],
    hotgoods: [{
        "name": "故障报修",
        "pic_url": "/pages/image/tubiao/tools.png",
        "pagename": "baoxiu"
      },
      {
        "name": "报修记录",
        "pic_url": "/pages/image/tubiao/my-recent-documents.png",
        "pagename": "recore"
      },
      {
        "name": "通知公告",
        "pic_url": "/pages/image/tubiao/audio_blog.png",
        "pagename": "tongzhi"
      },
      {
        "name": "部门服务",
        "pic_url": "/pages/image/tubiao/aerial_platform.png",
        "pagename": "bumenfuwu"
      },
      {
        "name": "服务电话",
        "pic_url": "/pages/image/tubiao/calllogshortcut.png",
        "pagename": "dianhua"
      },
      {
        "name": "抄表抄电",
        "pic_url": "/pages/image/tubiao/ordering.png",
        "pagename": "chaobiao"
      },
      {
        "name": "工作上报",
        "pic_url": "/pages/image/tubiao/x-office-spreadsheet.png",
        "pagename": "gongzuoshangbao"
      },
      {
        "name": "排班表",
        "pic_url": "/pages/image/tubiao/generate-tables.png",
        "pagename": "zhiban",
        "path":"/pages/zhiban/zhiban"
      },
      {
        "name": "区域温度",
        "pic_url": "/pages/image/tubiao/soutu.png",
        "pagename": "wendu"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  redirto: function(e) {
    wx.navigateTo({
      url: "/pages/" + e.currentTarget.dataset.pagename + "/" + e.currentTarget.dataset.pagename,
    })
  },

//   onLoad: function() {
// wx.request({
//   url: '',
//   data: {
//     username: '001',
//     pwd: 'abc'
//   },
//   method: 'GET',
//   header: {
//     'content-type': 'application/json' // 默认值
//   },
//   success: function (res) {
//     console.log(res.data);
//   },
//   fail: function (res) {
//     console.log(".....fail.....");
//   }
//   })
//   },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})