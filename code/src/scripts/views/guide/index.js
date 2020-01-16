import "./index.scss";
import React, { Component } from "react";

import { Button } from "antd-mobile";

export default class Guide extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [
				require("@/assets/images/img1.jpg"),
				require("@/assets/images/img2.jpg"),
				require("@/assets/images/img3.jpg"),
				require("@/assets/images/img4.jpg")
			]
		};
	}

	componentDidMount() {
		var timer1 = window.setTimeout(function() {
			window.clearTimeout(timer1);
		}, 5000);
	}

	handleGotoMain = index => {
		this.props.history.push("/main/home");
	};

	render() {
		return (
			<div className="g-box">
				<span
					onClick={this.handleGotoMain}
					style={{
						// width: ".5rem",
						height: ".5rem",
						textAlign: "center",
						lineHeight: "0.5rem",
						position: "absolute",
						right: ".1rem",
						top: ".1rem"
					}}
				>
					跳过
				</span>
				<img
					style={{ width: "100%", height: "100%" }}
					src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578630114719&di=2b6f3e7e7aa6dd1e5ca700f2e7519b8c&imgtype=0&src=http%3A%2F%2Fpic.2265.com%2Fupload%2F2017-3%2F2017320123433431530.jpeg"
					alt=""
				/>
			</div>
		);
	}
}
