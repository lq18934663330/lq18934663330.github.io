import "./index.scss";
import React, { Component } from "react";
import Head from "~/components/head";
import { Button, List, Modal } from "antd-mobile";
import { axios } from "&";
import UploadImg from "~/components/uploadImg";
import { connect } from "react-redux";
import { getMobile } from "../../actions";
import Item from "antd-mobile/lib/popover/Item";
import { Link } from "react-router-dom";
@connect(state => ({
	token: state.getIn(["user", "token"]),
	mobile: state.getIn(["user", "mobile"])
}))
class Mine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: !!sessionStorage.token,
			mobile: null
		};
	}

	componentDidMount() {
		// axios.post("/react/getMobile").then(res => {
		// 	this.setState({
		// 		mobile: res.data.result
		// 	});
		// });
		if (!this.props.mobile) {
			this.props.dispatch(
				getMobile({
					url: "/react/getMobile"
				})
			);
		}
	}

	handleGotoLogin = () => {
		this.props.history.push("/login");
	};

	handelLoginOut = () => {
		// alert('Delete', 'Are you sure???', [
		// 	{ text: '取消', onPress: () => console.log('cancel') },
		// 	{
		// 		text: '确认', onPress: () => {
		sessionStorage.clear();
		this.props.history.push("/main/login");
		// 		}
		// 	},
		// ])
	};

	render() {
		const { token, mobile } = this.props;
		const { isLogin } = this.state;
		const Item = List.Item;
		const alert = Modal.alert;
		const showAlert = () => {
			const alertInstance = alert("Delete", "Are you sure???", [
				{
					text: "Cancel",
					onPress: () => console.log("cancel"),
					style: "default"
				},
				{ text: "OK", onPress: () => console.log("ok") }
			]);
			setTimeout(() => {
				// 可以调用close方法以在外部close
				console.log("auto close");
				alertInstance.close();
			}, 500000);
		};

		return (
			<div>
				<Head show={false} mine={true} title="个人中心"></Head>
				{isLogin && (
					<div className="islogin">
						<div className="top">
							<UploadImg></UploadImg>
							<div className="con">
								<h2>{mobile} </h2>
								<p>查看并编辑个人资料</p>
							</div>
						</div>
						<hr />
						<div className="goods">
							<div>
								<p>0</p>
								<span>未支付订单</span>
							</div>
							<span className="line"></span>
							<div>
								<p>0</p>
								<span>全部订单</span>
							</div>
						</div>
						<hr />
						<List className="my-list">
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								onClick={() => {}}
							>
								我的收藏
							</Item>
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								extra="14张优惠券"
								onClick={() => {}}
							>
								我的优惠券
							</Item>
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								onClick={() => {}}
							>
								我的地址
							</Item>
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								onClick={() => {}}
							>
								联系
							</Item>
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								onClick={this.handelLoginOut}
							>
								退出登录
							</Item>
						</List>
					</div>
				)}
				{!isLogin && (
					<div className="islogin">
						<Link style={{ color: "red" }} to="/login">
							<div className="top">
								<span style={{ fontSize: "25px" }} className="iconfont">
									&#xe60c;
								</span>
								<div className="con">
									<h2>未登录</h2>
								</div>
							</div>
						</Link>
						<hr />
						<div className="goods">
							<div>
								<p>0</p>
								<span>未支付订单</span>
							</div>
							<span className="line"></span>
							<div>
								<p>0</p>
								<span>全部订单</span>
							</div>
						</div>
						<hr />
						<List className="my-list">
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								onClick={() => {}}
							>
								魅力社
							</Item>
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								onClick={() => {}}
							>
								我的优惠券
							</Item>
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								onClick={() => {}}
							>
								我的地址
							</Item>
							<Item
								style={{ height: "1rem" }}
								arrow="horizontal"
								onClick={() => {}}
							>
								练习我们
							</Item>
						</List>
					</div>
				)}
			</div>
		);
	}
}
export default Mine;
