/*
* result [function|object]
* put the response what your want in result
*/
var mockData =[
    {
        url:'/test',
        method:'post',
        result:{msg:'success'}
    },
    {
        url:'/testFun',
        method:'get',
        result:function(reqParame){
          //do something
          return reqParame;
        }
    }
];

exports.default = mockData;
module.exports = exports.default;