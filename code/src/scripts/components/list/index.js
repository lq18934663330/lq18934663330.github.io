import "./index.scss";
import React, { Component } from "react";
import { PullToRefresh, WingBlank, WhiteSpace } from "antd-mobile";
import { Link } from "react-router-dom";
import Item from "../item";

export default class List extends Component {
	constructor() {
		super();
		this.state = {
			refreshing: false
		};
	}
	render() {
		const { tab, good } = this.props;
		console.log(this.props);

		return (
			<div>
				<PullToRefresh
					damping={60}
					ref={el => (this.ptr = el)}
					style={{
						height: document.documentElement.clientHeight,
						overflowY: "auto",
						overflowX: "hidden"
					}}
					indicator={{ deactivate: "上拉可以刷新" }}
					direction={"down"}
					refreshing={this.state.refreshing}
					onRefresh={() => {
						this.setState({ refreshing: true }); //正在刷新
						setTimeout(() => {
							this.setState({ refreshing: false });
						}, 1000);
					}}
				>
					{good.map((item, index) => {
						return <Item tab={tab} key={index} item={item}></Item>;
					})}
				</PullToRefresh>
			</div>
		);
	}
}
