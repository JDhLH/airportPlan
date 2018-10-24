// pages/baoxiu/baoxiu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    focus: false,
    avatarUrl: '',
    weizhi: '',
    baoxiuInfo: '',
    baoxiuPhone: '',
    baoxiuPeople: '',
    danwei: '',//location.location_name,
    leixing: '',
    lx_index: 0,
    index: 0,
    wz_index: 0,
    height: 20,
    inputValue: '',
    files: [],
    picturesPath: "",
    success:false,
    list:'',
    fault_type_id:'',
    department_id:'',
    location_id:'',
    describe:'',
    personName:'',
    phone:'',
    
  },
  staticData:{},
  // chooseImage: function (e) {
  //   var that = this;
  //   wx.chooseImage({
  //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  //     success: function (res) {
  //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
  //       that.setData({
  //         files: that.data.files.concat(res.tempFilePaths)
  //       });
  //     }
  //   })
  // },
  // previewImage: function (e) {
  //   wx.previewImage({
  //     current: e.currentTarget.id, // 当前显示图片的http链接
  //     urls: this.data.files // 需要预览的图片http链接列表
  //   })
  // },
  baoxiuInfoIn:function(res){
    console.log(res);
  },
  openConfirm: function (res) {
    console.log(res);
     if (!this.staticData.des) {
       wx.showToast({
         title: '报修描述未填',
         icon: 'loading',
         duration: 1000
       })
       return;
     }
    if (!this.staticData.name) {
      wx.showToast({
        title: '报修人姓名未填',
        icon: 'loading',
        duration: 1000
      })
      return;
    } 
    if (!this.staticData.phone) {
      wx.showToast({
        title: '反馈电话未填',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    var that = this;
    wx.request({
      url: 'https://224r34952t.51mypc.cn/rpInsertInfo',
      header: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      data: {
        //time: '2018-9-28',//获取本地时间 String格式
        person_name: this.data.personName,
        phone: this.data.phone,
        location_id: this.data.location_id,
        fault_type_id: this.data.fault_type_id,
        describe: this.data.describe,
        process_id: 1,
        result: '待审核',
        department_id: this.data.department_id,
        aceept_person_id: 10002,
        comments: '待审核',
        img: ''
      },
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
            success:true
          })
        }
      }
    })
    // wx.uploadFile({
    //   url: 'https://224r34952t.51mypc.cn/upload/picture',
    //   filePath: that.data.avatarUrl[0],//图片路径，如tempFilePaths[0]
    //   name: 'file',
    //   header: {
    //     "Content-Type": "multipart/form-data"
    //   },
    //   formData:
    //     {
    //       userId: 12345678 //附加信息为用户ID
    //     },
    //   success: function (res) {
    //     console.log(res);

    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   },
    //   complete: function (res) {

    //   }
    // })


  },
  describe:function(res){
    var that=this;
    that.setData({
      describe:res.detail.value,
    })
    this.staticData.des = res.detail.value
  },
  personName:function(res){
    var that = this;
    that.setData({
      personName: res.detail.value,
    })
    this.staticData.name = res.detail.value
  },
  phone:function(res){
    var that = this;
    that.setData({
      phone: res.detail.value,
    })
    this.staticData.phone = res.detail.value
  },
  WZbindPickerChange:function(e){
    var that=this;
    that.setData({
      wz_index: e.detail.value,
      location_id: parseInt(e.detail.value) + 1,
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
      department_id: parseInt(e.detail.value) + 1,
    })
  },
  LXbindPickerChange: function (e) {
    this.setData({
      lx_index: e.detail.value,
      fault_type_id: parseInt(e.detail.value) + 1,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://224r34952t.51mypc.cn/dmFindAll',
      header: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      // data: {},
      success: function (res) {
        var list = res.data;
        //获取部门的集合
        if (list == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000 //弹出时间
          })
        } else {
          that.setData({
            danwei: list
          })
        }
      }
    });
    wx.request({
      url: 'https://224r34952t.51mypc.cn/ftFindAll',
      header: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
        var list = res.data;
        console.log(list);
        if (list == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: 'loading',
            duration: 2000 //弹出时间
          })
        } else {
          that.setData({
            leixing: list
          })
        }
      }
    });
    var that = this;
    wx.request({
      url: 'https://224r34952t.51mypc.cn/lcFindAll',
      header: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      // data: {},
      success: function (res) {
        var list = res.data;
        console.log(list);
        if (list == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000 //弹出时间
          })
        } else {
          that.setData({
            weizhi: list
          })
        }
      }
    })  
  },

  handleBackTap() {
    wx.navigateBack();
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