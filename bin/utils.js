const fs = require("fs"),
	path = require("path"),
	readline = require('readline');

function copy(originalFile,newFile){
	//node v8.5.0
	fs.copyFile(originalFile,newFile,(err)=>{
		if(err){
			throw err;
		}
		console.log(originalFile+' 拷贝成功');
	});
}
//获取cli中默认文件路径
function getPath(folderName){
	return path.join(__dirname,"../",folderName);
}
//命令行交互
function selfConfirm(question){
	const promise = new Promise((resolve)=>{
		const rl = readline.createInterface({
		    input: process.stdin,
		    output: process.stdout
		});
		rl.question(question, function(answer){
		    rl.close();
		    resolve(answer);
		});
	});
	return promise;
}
//获取项目框架
function getProjectFrameByCL(params){
	if(params.length&&params[0]){
		const arr = params[0].split('@');
		return arr.length>1?arr[1]:'';
	}
	return "";
}
//创建项目
function createApp(appPath,appName){
	if(fs.existsSync(appPath)){
		console.log(appName+'项目已存在!');
		// fs.rmdirSync(appPath);
		return;
	}
	fs.mkdir(appPath,function(error){
	    if(error){
	        console.log(error);
	        return false;
	    }
	    fs.mkdir(appPath+'/src',function(srcErr){
	    	if(!srcErr){
	    		copy(getPath('template/main.js'),appPath+'/src/main.js');
	    		fs.mkdir(appPath+'/src/assets',function(err){
			    	if(!err){
			    		copy(getPath('template/main.css'),appPath+'/src/assets/main.css');
			    		copy(getPath('template/code.jpg'),appPath+'/src/assets/code.jpg');
			    	}
			    });
	    	}
	    });
	    fs.mkdir(appPath+'/public',function(err){
	    	if(!err){
	    		copy(getPath('template/index.html'),appPath+'/public/index.html');
	    	}
	    });
	    copy(getPath('config/package.json'),appPath+'/package.json');
		copy(getPath('config/webpack.config.js'),appPath+'/webpack.config.js');
		copy(getPath('config/.babelrc'),appPath+'/.babelrc');
		copy(getPath('config/.eslintrc'),appPath+'/.eslintrc');
	    console.log('创建项目成功');
	});
}

//创建react项目
function createReactApp(appPath,appName){
	if(fs.existsSync(appPath)){
		console.log(appName+'项目已存在!');
		// fs.rmdirSync(appPath);
		return;
	}
	fs.mkdir(appPath,function(error){
	    if(error){
	        console.log(error);
	        return false;
	    }
	    fs.mkdir(appPath+'/src',function(srcErr){
	    	if(!srcErr){
	    		copy(getPath('template/main-react.js'),appPath+'/src/main.js');
	    		fs.mkdir(appPath+'/src/assets',function(err){
			    	if(!err){
			    		copy(getPath('template/main.css'),appPath+'/src/assets/main.css');
			    		copy(getPath('template/code.jpg'),appPath+'/src/assets/code.jpg');
			    	}
			    });
	    	}
	    });
	    fs.mkdir(appPath+'/public',function(err){
	    	if(!err){
	    		copy(getPath('template/index.html'),appPath+'/public/index.html');
	    	}
	    });
	    copy(getPath('config/package-react.json'),appPath+'/package.json');
		copy(getPath('config/webpack.config.js'),appPath+'/webpack.config.js');
		copy(getPath('config/.babelrc-react'),appPath+'/.babelrc');
		copy(getPath('config/.eslintrc-react'),appPath+'/.eslintrc');
	    console.log('创建react项目成功');
	});
}

exports.copy = copy;
exports.getPath = getPath;
exports.selfConfirm = selfConfirm;
exports.getProjectFrameByCL = getProjectFrameByCL;
exports.createApp = createApp;
exports.createReactApp = createReactApp;