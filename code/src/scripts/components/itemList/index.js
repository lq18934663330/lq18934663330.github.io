import "./index.scss";

import React, { Component } from "react";
import { PullToRefresh, WingBlank, WhiteSpace } from "antd-mobile";
import { Link } from "react-router-dom";
export default class ItemList extends Component {
	render() {
		const { itemlist } = this.props;
		console.log("itemlist+++++++++", itemlist.events);
		return (
			<div className="move-in-in">
				{itemlist.events &&
					itemlist.events.map((i, inx) => {
						return (
							<WingBlank key={inx}>
								<div className="itemtitileBox">
									<WhiteSpace />
									<img src={i.imageUrl} alt="" />
									<div className="itemtitile">
										<h2>{i.englishName}</h2>
										<h2>{i.chineseName}</h2>
										<p>{i.discountText}</p>
									</div>
									<div className="ying"></div>
								</div>
							</WingBlank>
						);
					})}
				{!itemlist.events && (
					<WingBlank>
						<div className="itemtitileBox">
							<WhiteSpace />
							<img src={itemlist.imageUrl} alt="" />
							<div className="itemtitile">
								<h2>{itemlist.englishName}</h2>
								<h2>{itemlist.chineseName}</h2>
								<p>{itemlist.discountText}</p>
							</div>
							<div className="ying"></div>
						</div>
					</WingBlank>
				)}
			</div>
		);
	}
}
