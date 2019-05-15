/*
* 1.open the mock server in webpack.config.js
* 2.setup data in mockData.js
* 3.don't change this file 
*/
var mockData = require('./mockData');
var mockPlugin = function(app){
  mockData = mockData||[];
  app.all('*',function(req,res,next){
    var searchReq = mockData.find(function(obj){
      return matchUrl(req.originalUrl,obj.url) &&req.method == obj.method.toUpperCase()
    });
    if(searchReq){
      if(typeof searchReq.result === 'function'){
        /*
        * 添加到url中参数通过query可以拿到，通过post请求体提交的参数需要body-parse等中间件处理才能拿到
        */
        res.send(searchReq.result(req.query));
      }else{
        res.status(searchReq.status||'200').send(searchReq.result);
      }
    }else{
      next();
    }
  });
}

function matchUrl(reqUrl,mockUrl){
  var urlReg = new RegExp('^'+mockUrl+'(\\?+.*)?$','i');
  return urlReg.test(reqUrl);
}

exports.default = mockPlugin;
module.exports = exports.default;