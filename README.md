方便自己快速的创建一个webpack+es6的web项目，不同于其他脚手架封装所有配置

*未完成版
主要对自己前端的一个经验和总结

step1:clone wpqs
step2:cd wpqs
step3:npm start [name]
step4:拷贝[name]文件夹到任意工作文件夹
step5:在[name]项目下npm install
step6:npm start启动项目

node v8.5.0 以上
webpack v4.X

webpack4.x必须同步安装webpack-cli，在之前两者在同一个包

webpack4.x不适用extract-text-webpack-plugin3.x及以下版本，使用更高版本或使用mini-css-extract-plugin代替

babel-loader8.x须使用@babel/core及@babel/preset-env版本，使用"useBuiltIns":"usage"配置需要制定corejs版本并安装

style-loader与css-loader区别
css-loader处理css文件，style-loader负责创建style标签并将处理后css加载到页面
如果安装sass-loader，需要安装node-sass包，在配置中将sass-loader放到最右方

普通资源文件url-loader可以解决，如果超过设置的limit值，会使用file-loader来解决
