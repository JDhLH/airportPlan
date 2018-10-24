Page({
  data: {
    id:'',
    index: 0,
    focus: false,
    height: 10,
    inputValue: '',
    files: [],
    content:'',
    success:false,
  },
   staticData:{},

  onLoad:function(options){
    console.log(options);
    console.log(options.id);
    var str = options.id;
    var strs = new Array();
    strs = str.split(",");
    var location_name = strs[1];
    this.id = strs[0];
    console.log("--->当前id:" + this.id);
    var that = this;
    this.setData({
      location_name: location_name,
    })
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  }, 

  handleTempChange(e) {
    console.log(e.detail.value);
    this.staticData.Temp = e.detail.value;
  },

  handleSubmit(){
    if (!this.staticData.Temp) {
      wx.showToast({
        title: '请输入温度',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    wx.request({
      url: 'https://224r34952t.51mypc.cn/temUpdate',
      data: {
        id: this.id,
        tem: this.staticData.Temp,
      },
      mothod: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
     success: this.handleSubmitSucc.bind()
    })
     },
  handleSubmitSucc(res){
    if (res.errMsg === 'request:ok'){
      this.setData({
        success:true
      })
    }
  },

 handleBackTap(){
   wx.navigateBack();
 },
 
})