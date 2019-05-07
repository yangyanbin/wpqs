#!/usr/bin/env node

const fs = require("fs"),
	path = require("path"),
	readline = require('readline'),
	utils = require("./utils"),
	config = require("../package.json");

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
const configArr = ['-v','-h'];
if(configArr.indexOf(params[0])>=0){
	switch(params[0].toUpperCase()){
		case '-v':
			console.log(config.version);
			break;
		case '-h':
			console.log('-v [appname] [appname@react]');
			break;
		default:break;
	}
}else{
	const appName = params[0].split('@')[0];
	utils.selfConfirm('Create project '+appName+' in the current directory?(y/n): ').then(answer=>{
		if(answer.toUpperCase()==='Y'){
			const basePath = path.join('./',appName);
			const frame = utils.getProjectFrameByCL(params);
			//创建项目
			switch(frame.toLowerCase()){
				case 'react':
					utils.createFrameApp(basePath,appName,'react');
					break;
				case 'antd':
					utils.createFrameApp(basePath,appName,'antd');
					break;
				case 'vue':
					utils.createFrameApp(basePath,appName,'vue');
					break;
				default:
					utils.createApp(basePath,appName);
					break;
			}
		}else{
			console.log('Exit!');
		}
	});
}



