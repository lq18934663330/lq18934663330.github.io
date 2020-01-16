import "./index.scss";
import React, { Component } from "react";
import Head from "~/components/head";
import { connect } from "react-redux";
import { getFList, getFType } from "../../actions";
import { WhiteSpace, Tabs } from "antd-Mobile";
import List from "~/components/list";
import ClassList from "~/components/classList";

@connect(state => {
	return {
		FList: state.getIn(["data", "FList"]),
		FType: state.getIn(["data", "FType"])
	};
})
class Classify extends Component {
	componentDidMount() {
		const { dispatch, FList, FType } = this.props;
		if (!FList.length > 0) {
			dispatch(getFList({ url: "/react/getFList" }));
		}
		if (!FType.length > 0) {
			dispatch(getFType({ url: "/react/getFTypes" }));
		}
	}
	render() {
		console.log(this.props);
		const { dispatch, FList, FType } = this.props;

		console.log("FTypeFTypeFType", FType);
		const tabs = FType.map((item, index) => {
			let tabs = { title: item };
			return tabs;
		});

		console.log(tabs);
		console.log("FListFListFListFListFList", FList);
		return (
			<div className="c-box">
				<Head title="商品分类" show={false}></Head>
				<div className="Fdaohang">
					<Tabs
						tabDirection="vertical"
						className="tabsFtyle"
						tabBarPosition="left"
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
						{FList.map((val, i) => {
							console.log(val);
							return (
								<ClassList
									key={i}
									classList={FList[i].name == val.name ? FList[i] : ""}
								></ClassList>
							);
						})}
					</Tabs>
				</div>
			</div>
		);
	}
}
export default Classify;
