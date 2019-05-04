/**
 * 小程序配置文件
 */
//此处主机域名修改腾讯云解决方案分配的域名
// var host = 'https://djstudy.club:8443';
 var host ='http://localhost:8080';
var config = {
  //下面的地址配合云端Demo工作
  service:{
    host,
    //插入保修系统
    insertRepairUrl: `${host}/rpInsertInfo`,
    //获取所有的部门信息
    getAllDepartmentUrl: `${host}/dmFindAll`,
    //获取所有的故障类型
    getAllFaultTypeUrl: `${host}/ftFindAll`,
    //获取所有的位置
    getAllLocationUrl: `${host}/lcFindAll`,
    //上传图片的路径
    uploadImageUrl:`${host}/upload/picture`,
    //获取所有的部门服务
    getAllDepartmentServiceUrl: `${host}/sdFindController`,
    //获取属于的抄表信息
    getAllReportUrl: `${host}/wmFindAll`,
    //获取所有的电话列表
    getAllPhoneUrl: `${host}/sdFindPhoneController`,
    //温度跟新
    updateTemperatureUrl: `${host}/temUpdate`,
    //获取所有的工作
    findAllReportUrl: `${host}/findAllReport`,
    //获取所有的保修记录
    getAllRecoreUrl: `${host}/rpFindAll`,
    //获取所有的通知公告
    getAllNoticeUrl: `${host}/ncFindAll`,
    //获取所有的温度列表
    getAllTemperatureUrl: `${host}/temFindAll`,
    //获取所有的值班信息
    getAllDutyUrl: `${host}/findAllDuty`,
    // //获取上传图片的路径
    // uploadImageUrl: `${host}/upload/picture`,
	 //获取所以的待审核的路径
	  getAllpreReviewFun:`${host}/findAllPreView`,
	  //
	  getAllPendingFun:`${host}/findAllPending`,
	  //
	  getAllCompletedFun:`${host}/findCompleted`
  }
};
module.exports = config;