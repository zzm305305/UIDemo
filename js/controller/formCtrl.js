// var formModule = myAppFun.module('formController',[]);
myAppFun.controller('formConFun',function ($scope , myData){
    $scope.init = myData.getMyData();
    $scope.$watch(function(){
	    if($scope.init.mailText){
	        $scope.init.isShow = true
	        $scope.init.mailShow = false;
	    }else{
	        $scope.init.isShow = false;
	    }
	    if($scope.init.pwdText){
	        $scope.init.pwdShow = false;
	    }
    });
    /* 提交重置方法 */
    $scope.reset = function() {
        $scope.init.mailText = "";
        $scope.init.pwdText = "";
    };
    $scope.submitFun = function(isValid) {
        if(!isValid){
            if(!$scope.init.mailText){
                $scope.init.mailShow = true;
            }
            if(!$scope.init.pwdText){
                $scope.init.pwdShow = true;
            }
        }else{
            alert('登陆成功')
        }
    };
});
/*  底部信息 */
myAppFun.controller('footDataFun',function($scope){
    $scope.items = [
        {name:"公司介绍",link:"http://www.iqiyi.com/common/aboutus.html"},
        {name:"新闻动态",link:"http://www.iqiyi.com/common/news.html"},
        {name:"联系方式",link:"http://www.iqiyi.com/common/contactus.html"},
        {name:"招聘英才",link:"http://zhaopin.iqiyi.com"},
        {name:"爱奇艺实验室",link:"http://labs.iqiyi.com"},
        {name:"开放平台",link:"http://open.iqiyi.com/"},
        {name:"应用商店",link:"http://store.iqiyi.com/"},
        {name:"爱奇艺论坛",link:"http://bbs.iqiyi.com/"},
        {name:"帮助与反馈",link:"http://www.iqiyi.com/common/helpandsuggest.html?entry=yedi"},
        {name:"侵权投诉",link:"http://www.iqiyi.com/common/copyright.html?entry=iqiyi"},
        {name:"About Us",link:"http://www.iqiyi.com/common/20100420/n4813.html"}
    ]
 });