import "./index.scss";
import React, { Component } from "react";
import Head from "~/components/head";
import { WingBlank, SearchBar } from "antd-mobile";
import { connect } from "react-redux";
import { getSearchList, getGoodDetail } from "../../actions";
import { Link } from "react-router-dom";
import { axios } from "&";

@connect(state => {
	return {
		searchList: state.getIn(["data", "searchList"])
	};
})
class Search extends Component {
	handleSubmit(keyword) {
		console.log(keyword);
		this.props.dispatch(
			getSearchList({ url: "/react/getSearchList", params: { keyword } })
		);
	}

	render() {
		const { searchList } = this.props;

		console.log("searchilist", searchList);
		return (
			<div>
				<Head title="搜索" show={true} search={true}></Head>
				<WingBlank>
					<SearchBar
						placeholder="请输入关键字"
						onChange={this.handleSubmit.bind(this)}
					/>
				</WingBlank>
				{searchList && console.log(searchList)}
				{searchList && (
					<div className="search">
						<div className="product">
							{searchList.map((g, n) => {
								return (
									<div key={n} className="plist">
										<Link
											style={{ color: "black" }}
											to={"/search/slist" + g.productId}
										>
											<img src={g.imageUrl} alt="" />
											<div className="msg">
												<span>买手推荐</span>
												<h3>{g.brandName}</h3>
												<p>{g.productName}</p>
												<div className="price">
													<div className="subprice">
														<h2>¥{g.price}</h2>
														<span>{g.marketPrice}</span>
													</div>
													<span>{g.discount}折</span>
												</div>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		);
	}
}
export default Search;
