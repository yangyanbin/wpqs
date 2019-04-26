import "./assets/main.css";
import React from "react";
import ReactDom from "react-dom";
import {Icon} from "antd";

ReactDom.render(
	<h1><Icon type="rocket" />Antd quick start!!</h1>,
	document.querySelector('#root')
);
document.title = "Let's Rock!";