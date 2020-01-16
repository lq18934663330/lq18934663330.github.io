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
import { getGoodList, getGoodType } from "../../actions";
import { MySwipe } from "../../components/swipe";
import List from "../../components/list";
import UploadImg from "../../components/uploadImg";

@connect(state => {
	return {
		goodList: state.getIn(["data", "goodList"]),
		goodType: state.getIn(["data", "goodType"])
	};
})
class Home extends Component {
	componentDidMount() {
		const { dispatch, goodList, goodType } = this.props;
		if (!goodList.length > 0) {
			dispatch(
				getGoodList({ url: "/react/getMGoodList", params: { key: "推荐" } })
			);
		}
		if (!goodType.length > 0) {
			dispatch(getGoodType({ url: "/react/getMGoodTypes" }));
		}
	}

	render() {
		// const { banner } = this.state;
		console.log(this.props);
		const { goodList, dispatch, goodType } = this.props;
		const tabs = goodType.map(item => {
			let tabs = { title: item };
			return tabs;
		});
		console.log(tabs);
		console.log(goodList);
		return (
			<div className="home">
				<div className="header-home">
					<div className="class-top">
						<Link to="/main/mine">
							{sessionStorage.token && (
								<div className="tou">
									<UploadImg
										imgStyle={{ width: "100%", height: "100%" }}
									></UploadImg>
								</div>
							)}
							{!sessionStorage.token && (
								<div className="tou">
									<span className="iconfont">&#xe60c;</span>
								</div>
							)}
						</Link>
						<Link className="inp" to="/search">
							<span className="iconfont">&#xe631;</span>
							<input type="text" placeholder="请输入商品名称" />
						</Link>
						<Link to="/main/cart">
							<span className="iconfont">&#xe619;</span>
						</Link>
					</div>
				</div>
				<div className="c-man">
					<Tabs
						className="tabstyle"
						tabBarBackgroundColor="rgba(255,0,0,0)"
						tabs={tabs}
						initialPage={0}
						onChange={(tab, index) => {
							console.log("onChange", index, tab);
						}}
						onTabClick={(tab, index) => {
							console.log("onTabClick", index, tab);
						}}
					>
						{goodType.map((val, i) => {
							return (
								<List
									key={i}
									tab={val}
									good={goodList.filter(title => title.name == val)}
								></List>
							);
						})}
					</Tabs>
				</div>
			</div>
		);
	}
}
export default Home;
