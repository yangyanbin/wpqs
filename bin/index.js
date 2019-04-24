#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const utils = require("./utils");

const now = Date.now()+'';
/*process.argv获取命令行参数，
*第一个参数为node.exe路径
*第二个为node执行的js文件的路径
*后面为命令行追加的所有参数
*/
let params = [now];
if(process.argv.length>2){
	params = process.argv.slice(2);
}
const basePath = path.join('./',params[0]);
//创建项目
utils.createApp(basePath);
