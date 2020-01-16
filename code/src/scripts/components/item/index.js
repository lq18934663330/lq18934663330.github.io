import "./index.scss";
import React, { Component } from "react";
import { PullToRefresh, WingBlank, WhiteSpace } from "antd-mobile";
import { Link } from "react-router-dom";
import ItemList from "../itemList";

export default class Item extends Component {
	render() {
		const { item, tab } = this.props;
		return (
			<div className="move-in">
				<Link to={"/goodsList/?name=" + tab}>
					<img src={item.Bimg} alt="" />
					<div className="move-name">
						<h2>{item.imgName}</h2>
						<h3>{item.imgTitle}</h3>
						<h4>{item.Discount}</h4>
					</div>

					{item.eventList.map((item, i) => {
						return (
							<div key={i}>
								<p
									style={{
										fontSize: "0.5rem",
										lineHeight: "1rem",
										marginLeft: "0.4rem",
										color: "#000"
									}}
								>
									{item.name}
								</p>
								<ItemList itemlist={item}></ItemList>
							</div>
						);
					})}
				</Link>
			</div>
		);
	}
}
