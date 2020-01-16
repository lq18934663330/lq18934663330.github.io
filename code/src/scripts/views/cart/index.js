import "./index.scss";
import React, { Component } from "react";
import Head from "~/components/head";
import demo from "../../mobx/demo";
import shopcar from "../../mobx/shopcar";
import { observer } from "mobx-react";
import { NoticeBar, Checkbox, Button } from "antd-mobile";
import { Link } from "react-router-dom";
import { axios, history } from "&";
console.log(shopcar);
// console.log(demo)
@observer
class Cart extends Component {
	componentDidMount() {
		if (sessionStorage.token) {
			shopcar.getCarList("/react/getCarList");
			console.log("getcarlist");
		}
	}

	checkOne = e => {
		console.log(e);
		shopcar.changeOneChecked(e.target.checked, e.target.goodId);
	};

	checkAll = e => {
		console.log(e.target.checked);
		// shopcar.quan =   e.target.checked;
		shopcar.changeQuan(e.target.checked);
	};

	reduce = (goodId, count) => {
		if (count > 1) {
			shopcar.changeOneCount(goodId, false);
		}
	};

	add = (goodId, count) => {
		shopcar.changeOneCount(goodId, true);
	};

	changeCount = (goodId, v) => {
		console.log(v.target.value);
		if (v.target.value > 1) {
			shopcar.changeOneCountNum(goodId, v.target.value * 1);
		}
	};

	delSelect = () => {
		shopcar.delSelect();
	};

	render() {
		const { carList, carNum, total, quan } = shopcar;
		console.log("carlist", carList);
		return (
			<div>
				<Head show={true} car={true} title="购物车"></Head>
				<div style={{ display: sessionStorage.token ? "none" : "block" }}>
					<Button type="primary" onClick={() => history.push("/login")}>
						你尚未登陆,请马上登录
					</Button>
				</div>
				<div style={{ display: !sessionStorage.token ? "none" : "block" }}>
					<div style={{ display: carList.length > 0 ? "none" : "block" }}>
						<h2> 你 还买购买任何商品,购物车空空如也 , 请马上去购买 </h2>
					</div>

					<div style={{ display: !carList.length > 0 ? "none" : "block" }}>
						<div id="carDiv">
							<div className="checkall" id="tbody">
								<div className="checkdiv">
									<Checkbox onClick={this.checkAll} checked={quan}></Checkbox>
									<span>全选</span>
								</div>

								{carList &&
									carList.map((i, index) => {
										return (
											i.good && (
												<ul className="tr" key={index} id={i._id}>
													<li style={{ width: "11%" }}>
														<Checkbox
															checked={i.checked}
															goodId={i.goodId}
															onChange={this.checkOne}
														></Checkbox>
													</li>
													<li style={{ width: "24%" }}>
														<img src={i.good[0].imageUrl} />
													</li>
													<li
														style={{
															width: "44%",
															padding: "0 4px",
															boxSizing: "border-box"
														}}
													>
														<p
															style={{
																lineHeight: "18px",
																marginTop: "10px",
																fontWeight: "bolder",
																textAlign: "left"
															}}
														>
															{i.good[0].brandName}
														</p>
														<p
															style={{
																lineHeight: "18px",
																marginTop: "8px",
																overflow: "hidden",
																textAlign: "left",
																textOverflow: "ellipsis",
																whiteSpace: "nowrap"
															}}
														>
															{i.good[0].productName}
														</p>
														<p
															style={{
																lineHeight: "18px",
																fontWeight: "bolder",
																color: "red",
																marginTop: "19px",
																textAlign: "left"
															}}
														>
															￥{i.good[0].price}
														</p>
													</li>
													<li style={{ width: "20%" }}>
														<span
															style={{ fontSize: "22px", marginRight: "3px" }}
															onClick={() => this.reduce(i.goodId, i.count)}
														>
															-
														</span>
														<input
															goodsid={i.goodId}
															type="text"
															value={i.count}
															onChange={v => {
																this.changeCount(i.goodId, v);
															}}
															style={{
																width: "30px",
																fontSize: "16px",
																textAlign: "center",
																background: "none"
															}}
														/>
														<span
															style={{ fontSize: "22px" }}
															onClick={() => this.add(i.goodId, i.count)}
														>
															+
														</span>
													</li>
												</ul>
											)
										);
									})}
							</div>
							<div className="carFoot">
								<p
									onClick={this.delSelect}
									style={{
										width: "28%",
										lineHeight: "50px",
										fontSize: "14px",
										color: "red",
										marginLeft: "4%"
									}}
								>
									删除选中
								</p>
								<p style={{ width: "42%", lineHeight: "50px", color: "#fff" }}>
									<span
										style={{
											fontWeight: "bolder",
											fontSize: "16px",
											width: "100px",
											color: "red"
										}}
									>
										<span style={{ color: "black", fontSize: "18px" }}>
											总价：
										</span>
										¥ {total}
									</span>
								</p>
								<p
									style={{
										backgroundColor: "#c9cdce",
										width: "26%",
										height: "100%",
										fontSize: "16px",
										lineHeight: "50px",
										textAlign: "center",
										color: "#fff",
										letterSpacing: "2px"
									}}
								>
									去结算 {carNum}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cart;
