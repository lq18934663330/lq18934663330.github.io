import "./index.scss";
import React, { Component } from "react";
import Head from "~/components/head";
import { axios } from "&";
import {
	WingBlank,
	WhiteSpace,
	Carousel,
	Accordion,
	Flex,
	Tabs
} from "antd-mobile";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getGoodsList } from "../../actions";
import { MySwipe } from "../../components/swipe";
import List from "../../components/list";

@connect(state => {
	return {
		goodsList: state.getIn(["data", "goodsList"])
	};
})
class GoodsList extends Component {
	componentDidMount() {
		const { location, dispatch, goodsList } = this.props;
		console.log(this.props);
		if (!goodsList.length > 0) {
			dispatch(
				getGoodsList({
					url: "/react/getgoodslist",
					params: { key: new URLSearchParams(location.search).get("name") }
				})
			);
		}
	}

	render() {
		const { goodsList, dispatch, location } = this.props;
		console.log(goodsList);

		return (
			<div>
				<Head
					title={new URLSearchParams(location.search).get("name")}
					show={true}
				></Head>
				{goodsList.map((n, i) => {
					return (
						<ul
							key={i}
							style={{ width: "100%", height: "100%", overflow: "hidden" }}
						>
							{n.products.map((l, n) => {
								return (
									<Link
										key={n}
										to={"/detail/" + l.productId + "?title=" + l.brandName}
									>
										<li
											style={{
												width: "50%",
												float: "left",
												height: "5.6rem",
												overflow: "hidden"
											}}
										>
											<img
												style={{ width: "3rem", margin: ".3rem auto" }}
												src={l.imageUrl}
												alt=""
											/>
											<h2
												style={{
													fontWeight: 700,
													paddingLeft: ".4rem",
													color: "#000"
												}}
											>
												{l.brandName}
											</h2>
											<p
												style={{
													overflow: "hidden",
													textOverflow: "ellipsis",
													whiteSpace: "nowrap",
													width: "3rem",
													padding: "0 .4rem",
													color: "#000"
												}}
											>
												{l.productName}
											</p>
											<span
												style={{
													color: "#dd2828",
													fontSize: ".2rem",
													fontWeight: 700,
													paddingLeft: ".4rem"
												}}
											>
												￥{l.price}
											</span>
											<del
												style={{
													color: "#ccc",
													fontSize: ".2rem",
													textDecoration: "lineThrough"
												}}
											>
												￥{l.marketPrice}
											</del>
										</li>
									</Link>
								);
							})}
						</ul>
					);
				})}
			</div>
		);
	}
}
export default GoodsList;
