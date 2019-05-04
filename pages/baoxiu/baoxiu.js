// pages/baoxiu/baoxiu.js
var config = require('../../config');
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
    fault_type_id:1,
    department_id:1,
    location_id:1,
    describe:'',
    personName:'',
    des: '',
    
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  baoxiuInfoIn:function(res){
    console.log(res);
  },
  openConfirm: function (res) {
    var that = this;
    if (!this.data.des) {
      wx.showToast({
        title: '报修描述未填',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (!this.data.personName) {
      wx.showToast({
        title: '报修人姓名未填',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (!this.data.phone) {
      wx.showToast({
        title: '反馈电话未填',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    wx.request({
      url: config.service.insertRepairUrl,
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
        img: this.data.avatarUrl
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
   


  },
  describe:function(res){
    var that=this;
    that.setData({
      describe:res.detail.value,
      des: res.detail.value
    })
    
  },
  personName:function(res){
    var that = this;
    that.setData({
      personName: res.detail.value,
    })
  },
  phone:function(res){
    var that = this;
    that.setData({
      phone: res.detail.value,
    })
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
      url: config.service.getAllDepartmentUrl,
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
      url: config.service.getAllFaultTypeUrl,
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
      url: config.service.getAllLocationUrl,
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
  
  },
  bindViewTap: function () {
    var that = this;
    wx.chooseImage({
      // 设置最多可以选择的图片张数，默认9,如果我们设置了多张,那么接收时//就不在是单个变量了,
      count: 1,
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // 获取成功,将获取到的地址赋值给临时变量

        var tempFilePaths = res.tempFilePaths;
        console.log("---->tempFilePaths:" + that.data.files.concat(res.tempFilePaths));
        that.setData({
          //将临时变量赋值给已经在data中定义好的变量
          avatarUrl: res.tempFilePaths
        })
   
        console.log(that.data.avatarUrl[0]);
        wx.uploadFile({
          url: config.service.uploadImageUrl,
          filePath: that.data.avatarUrl[0],//图片路径，如tempFilePaths[0]
          name: 'image',
          header: {
            "Content-Type": "multipart/form-data",

          },
          formData:
            {
              userId: 12345678 //附加信息为用户ID
            },
          success: function (res) {
            console.log("执行提交图片成功",res);
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  previewImage: function (e) {
    var that = this,
      //获取当前图片的下表
      index = e.currentTarget.dataset.index,
      //数据源
      pictures = this.data.pictures;
    wx.previewImage({
      //当前显示下表
      current: pictures[index],
      //数据源
      urls: pictures
    })
  }
})