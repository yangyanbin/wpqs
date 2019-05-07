# webpack quick start(wqs)
方便自己快速的创建一个webpack+es6的web项目，不同于其他脚手架封装所有配置，会保留所有配置

**webpack+es6+eslint未完成版**

主要对自己前端的一个经验和总结
### 目前支持普通es6项目，react项目,后续添加其他，通过frame\(react,antd\)字段配置
- step1:clone wpqs
- step2:cd wpqs
- step3:npm link
- step4:切换到任意路径wqs [name]\[@frame\]
- step5:cd [name]
- step6:npm install
- step7:npm start启动项目

**dependencies:**
node v8.5.0 以上 webpack v4.X

***

webpack4.x必须同步安装webpack-cli，在之前两者在同一个包

webpack4.x不适用extract-text-webpack-plugin3.x及以下版本，使用更高版本或使用mini-css-extract-plugin代替

babel-loader8.x须使用@babel/core及@babel/preset-env版本，使用"useBuiltIns":"usage"配置需要指定corejs版本并安装

style-loader与css-loader区别
css-loader处理css文件，style-loader负责创建style标签并将处理后css加载到页面
如果安装sass-loader，需要安装node-sass包，在配置中将sass-loader放到最右方

普通资源文件url-loader可以解决，如果超过设置的limit值，会使用file-loader来解决

在包目录下npm link用于本地开发npm包，创建全局链接相当于全局安装，在需要使用的项目中npm link packageName后将npm包引用局部安装在node_module下

npm unlink删除此npm包

package.json全局安装时会将bin下配置加到全局变量

eslint+es6+webpack依赖eslint/eslint-loader/babel-eslint,eslint配置后支持es6语法，如果使用新特性\(...等\)则需要安装babel-eslint

@babel/preset-react提供jsx语法识别

.eslintrc文件配置env标注要使用的环境，对应环境的全局变量方法window,document等不会出错

#### antd按需加载的两种方式:
1. import xx from 'antd/lib/xx'指定引入
2. 安装babel-plugin-import，并在babel配置中添加插件配置，自动将import {xx} from "antd"转换为上述方式

webpack-dev-server命令 --open打开默认浏览器 --useLocalIp使用本地Ip作为路径打开浏览器

webpack --mode=development|production
开启生产模式和开发模式，同时将process.env.NODE_ENV设置为对应值，只能在代码中获取，在webpack.config.js配置文件中无法获取
