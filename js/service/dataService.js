myAppFun.factory('myData',function(){
	var initData =  {
            mailText:"",
            pwdText:"",
            isShow:false,
            mailShow:false,
            pwdShow:false,
            mailArr:['@126.com','@163.com','@qiyi.com','@qq.com','@sina.com']
    };
    var service = {};
    service.getMyData = function(){
    	return initData;
    };
    return service;
});