const fs = require("fs");
const path = require("path");

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
//创建项目
function createApp(appPath){
	if(fs.existsSync(appPath)){
		console.log('项目已存在');
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
	    console.log('创建项目成功');
	});
}

exports.copy = copy;
exports.getPath = getPath;
exports.createApp = createApp;