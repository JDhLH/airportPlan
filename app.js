//app.js
App({
  onLaunch: function () {
    //初始化云函数
    wx.cloud.init({
      traceUser:true
    });
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code);
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onError:function(){

  },
  globalData: {
    userInfo: null,
    grids: [
      {
        iamge: '/images/1.jpg',
        desc: "桂林",
      },
      {
        iamge: '/images/2.jpg',
        desc: "巴厘岛"
      },
      {
        iamge: '/images/3.jpg',
        desc: "韩国"
      },
      {
        iamge: '/images/4.jpg',
        desc: "美国"
      },
      {
        iamge: '/images/5.jpg',
        desc: "日本"
      },
      {
        iamge: '/images/6.jpg',
        desc: "台湾"
      },
      {
        iamge: '/images/7.jpg',
        desc: "泰国"
      },
      {
        iamge: '/images/8.jpg',
        desc: "土耳其"
      },
      {
        iamge: '/images/9.jpg',
        desc: "新西兰"
      },
      {
        iamge: '/images/10.jpg',
        desc: "英国"
      },
      {
        iamge: '/images/11.jpg',
        desc: "越南"
      },
      {
        iamge: '/images/13.jpg',
        desc: "巴黎"
      }
    ]
  },
  renderTime:function(date) {
    var da = new Date(parseInt(date.replace("/Date(", "").replace(")/", "").split("+")[0]));
    var  Year = da.getFullYear(); //ie火狐下都可以
    var  Month = da.getMonth() + 1;
    var  Day = da.getDate();
    var  Hours = da.getHours();
    var  Minutes = da.getMinutes();
    var  Seconds = da.getSeconds();
    var CurrentDate = "";
    CurrentDate += Year + "-";
    if(Month >= 10) {
  CurrentDate += Month + "-";
}
            else {
  CurrentDate += "0" + Month + "-";
}
if (Day >= 10) {
  CurrentDate += Day;
}
else {
  CurrentDate += "0" + Day;
}
if (Hours < 10) {
  Hours = "0" + Hours;
}
if (Minutes < 10) {
  Minutes = "0" + Minutes;
}
if (Seconds < 10) {
  Seconds = "0" + Seconds;
}
return CurrentDate + " " + Hours + ":" + Minutes + ":" + Seconds;
  }
})