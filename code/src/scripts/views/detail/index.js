import "./index.scss";
import React, { Component } from "react";
import Head from "~/components/head";
import { axios, history } from "&";
import { connect } from "react-redux";
import { getGoodsDetail } from "../../actions";
import { Link } from "react-router-dom";
import { Carousel, WingBlank, Icon, Grid, Modal, Toast } from "antd-mobile";

const alert = Modal.alert;
const showAlert = () => {
	const alertInstance = alert("", "即将去购物车结算", [
		{
			text: "取消",
			onPress: () => console.log("取消"),
			style: "default"
		},
		{ text: "同意", onPress: () => history.push("/main/cart") }
	]);
	setTimeout(() => {
		// 可以调用close方法以在外部close
		console.log("auto close");
		alertInstance.close();
	}, 500000);
};

@connect(state => {
	return {
		goodsDetail: state.getIn(["data", "goodsDetail"]),
		pic: state.getIn(["user", "pic"])
	};
})
class Detail extends Component {
	constructor(props) {
		super(props);

		this.state = { licolor: "red", sc: false };
	}
	bgc(event) {
		console.log(this);
		console.log(this.state);
		this.setState({ licolor: "#f5f5f5" });
	}

	addShoucang = cs => {
		if (!cs.sc) {
			axios.get("react/addShoucang", { params: cs });
		} else {
			axios.get("react/scShoucang", { params: { goodId: cs.goodId } });
		}
		this.setState({ sc: !this.state.sc });
	};
	componentDidMount() {
		const { location, dispatch, goodsDetail, match } = this.props;
		console.log(this.props);
		console.log(match.params.goodId);

		dispatch(
			getGoodsDetail({
				url: "/react/getgoodsdetail",
				params: { id: match.params.goodId }
			})
		);
		axios
			.get("/react/Shoucang", { params: { goodId: match.params.goodId } })
			.then(result => {
				this.setState({
					sc: result
				});
			});
	}
	addTocart = () => {
		const { location, goodsDetail, match } = this.props;
		console.log("addTocartaddTocartaddTocart");
		axios
			.post("/react/addToShopcar", {
				count: 1,
				good: goodsDetail.products,
				goodId: match.params.goodId
			})
			.then(res => {});
	};
	addGoTocart = () => {
		const { location, goodsDetail, match } = this.props;
		console.log("addTocartaddTocartaddTocart");
		showAlert();
		axios
			.post("/react/addToShopcar", {
				count: 1,
				good: goodsDetail.products,
				goodId: match.params.goodId
			})
			.then(res => {});
	};

	render() {
		const { item, location, match, goodsDetail, pic } = this.props;
		const { licolor, sc } = this.state;
		console.log(goodsDetail);
		return (
			<div>
				<div style={{ position: "fixed", top: "0", width: "100%" }}>
					<Head
						title={new URLSearchParams(location.search).get("title")}
						show={true}
					></Head>
				</div>
				<WingBlank style={{ paddingBottom: "1rem" }}>
					{goodsDetail.products &&
						goodsDetail.products.map((l, i) => {
							return (
								<div key={i} style={{ overflow: "hidden" }}>
									<img style={{ width: "100%" }} src={l.imageUrl} alt="" />
									<div style={{ width: "100%" }}>
										<h1 style={{ fontSize: ".4rem" }}>{l.productName}</h1>
										<p style={{ padding: ".3rem", overflow: "hidden" }}>
											<del
												style={{
													color: "#ccc",
													fontSize: ".28rem",
													lineHeight: ".28rem",
													marginBottom: "0.28rem"
												}}
											>
												￥{l.marketPrice}
											</del>
										</p>
										<strong
											style={{
												fontSize: ".3rem",
												color: "#dd2828",
												padding: ".3rem"
											}}
										>
											￥{l.price}
										</strong>
										<span
											style={{
												verticalAlign: " text-top",
												marginRight: " .1rem",
												height: " .3rem",
												lineHeight: " .26rem",
												padding: " .05rem",
												background: " rgb(255, 255, 255)",
												color: "rgb(0, 0, 0)",
												border: "0.01rem solid rgb(0, 0, 0)",
												marginBottom: ".3rem"
											}}
										>
											{l.discount}折
										</span>
									</div>
									<div
										style={{
											borderTop: ".013333rem solid #eee",
											borderBottom: ".013333rem solid #eee",
											padding: ".4rem 0",
											marginTop: ".4rem"
										}}
									>
										<p style={{ lineHeight: "0.7rem", fontSize: ".29rem" }}>
											服务
											<span
												style={{
													marginLeft: "0.3rem",
													paddingRight: "0.3rem",

													color: "#666"
												}}
											>
												正品保障
											</span>
											<span style={{ color: "#666" }}>七天无理由</span>
											<Icon type="right" size="xxs" />
										</p>
									</div>

									<div
										style={{
											overflow: "hidden",
											padding: ".5rem 0",
											borderBottom: ".013333rem solid #eee"
										}}
									>
										<h2>用户评论</h2>
									</div>
								</div>
							);
						})}
				</WingBlank>
				<div
					className="dibu"
					style={{
						width: "100%",
						height: "1rem",
						position: "fixed",
						bottom: 0,
						left: 0,
						zIndex: 999,
						overflow: "hidden"
					}}
				>
					<ul style={{ width: "100%", height: "100%" }}>
						<li
							style={{ width: "39%", color: "#dd2828" }}
							onClick={this.addGoTocart.bind(this)}
						>
							立即购买
						</li>
						<li style={{ width: "39%" }} onClick={this.addTocart.bind(this)}>
							加入购物车
						</li>
						<li
							style={{ width: "20%" }}
							onClick={() =>
								this.addShoucang({
									sc,
									goodId: match.params.goodId,
									good: goodsDetail.products
								})
							}
						>
							<p>{!sc && "收藏"}</p>
							<p style={{ fontSize: ".35rem" }}>{sc && "取消收藏"}</p>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default Detail;
