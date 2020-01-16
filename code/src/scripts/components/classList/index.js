import "./index.scss";
import React, { Component } from "react";
import { PullToRefresh, WingBlank, WhiteSpace } from "antd-mobile";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
	render() {
		const { classList } = this.props;
		console.log(classList);

		return (
			<div className="class-in">
				<ul>
					{classList.name == "精选大牌" &&
						classList.title.map((l, i) => {
							return (
								<li key={i} style={{ float: "left" }}>
									<img
										style={{ width: "3rem", padding: "0.2rem 0 0 0.2rem" }}
										src={l.logoUrl}
										alt=""
									/>
								</li>
							);
						})}

					{classList.name == "品牌" &&
						classList.title.map((n, i) => {
							return (
								<li key={i}>
									<h2
										style={{
											fontWeight: 700,
											lineHeight: "1rem",
											fontSize: "0.3.5rem",
											textIndent: "0.3rem"
										}}
									>
										{n.index}
									</h2>

									{n.brandList.map((p, y) => {
										return (
											<div
												key={y}
												style={{
													display: "inherit",
													overflow: "hidden",
													height: "0.6rem",
													width: "100%",
													margin: "0.25rem"
												}}
											>
												{p.logoUrl && (
													<img
														style={{
															height: "0.6rem",
															width: "1.2rem",
															float: "left",
															marginRight: "0.2rem"
														}}
														src={p.logoUrl}
														alt=""
													/>
												)}
												{!p.logoUrl && (
													<span
														style={{
															width: "1.2rem",
															height: "0.6rem",
															float: "left",
															fontSize: "0.1rem",
															textAlign: "center",
															lineHeight: "0.6rem",
															marginRight: "0.2rem",
															overflow: "hidden",
															textOverflow: "ellipsis",
															whiteSpace: "nowrap",
															fontWeight: 700,
															backgroundColor: "#fff"
														}}
													>
														{p.brandName}
													</span>
												)}
												<span
													style={{
														fontSize: "0.3rem",
														textAlign: "center",
														lineHeight: "0.6rem",
														fontWeight: 400
													}}
												>
													{p.brandName}
												</span>
											</div>
										);
									})}
								</li>
							);
						})}
					{classList.name == "女士" &&
						classList.title.map((n, i) => {
							return (
								<div key={i}>
									<h2
										style={{
											lineHeight: "1rem",
											fontSize: "0.3rem",
											textIndent: "0.3rem",
											fontWeight: 700
										}}
									>
										{n.categoryName}
									</h2>
									<div style={{ overflow: "hidden" }}>
										{n.childCategoryList.map((f, o) => {
											return (
												<div
													key={o}
													style={{
														width: "2rem",
														float: "left",
														overflow: "hidden"
													}}
												>
													<img
														style={{
															height: "1.5rem",
															width: "auto",
															margin: "0 auto"
														}}
														src={f.categoryLogoUrl}
														alt=""
													/>
													<p
														style={{
															textAlign: "center",
															lineHeight: "0.5rem"
														}}
													>
														{f.categoryName}
													</p>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					{classList.name == "家居" && (
						<h2
							style={{
								lineHeight: "1rem",
								fontSize: "0.3rem",
								textIndent: "0.3rem",
								fontWeight: 700
							}}
						>
							推荐分类
						</h2>
					)}
					{classList.name == "家居" &&
						classList.title.map((n, i) => {
							return (
								<div
									key={i}
									style={{ float: "left", height: "2rem", margin: "0.2rem" }}
								>
									<img
										style={{ height: "1.6rem" }}
										src={n.thirdCategoryPicUrl}
										alt=""
									/>
									<p
										style={{
											lineHeight: "0.4rem",
											color: "#999",
											textAlign: "center"
										}}
									>
										{n.thirdCategoryTitle}
									</p>
								</div>
							);
						})}
					{classList.name == "家居" && (
						<div style={{ width: "100%", overflow: "hidden" }}>
							{classList.list.map((l, d) => {
								return (
									<div key={d} style={{ width: "100%", overflow: "hidden" }}>
										<h2
											style={{
												lineHeight: "1rem",
												fontSize: "0.3rem",
												textIndent: "0.3rem",
												fontWeight: 700
											}}
										>
											{l.categoryName}
										</h2>
										{l.childCategoryList.map((f, o) => {
											return (
												<div
													key={o}
													style={{
														width: "2rem",
														float: "left",
														overflow: "hidden"
													}}
												>
													<img
														style={{
															height: "1.5rem",
															width: "auto",
															margin: "0 auto"
														}}
														src={f.categoryLogoUrl}
														alt=""
													/>
													<p
														style={{
															textAlign: "center",
															lineHeight: "0.5rem"
														}}
													>
														{f.categoryName}
													</p>
												</div>
											);
										})}
									</div>
								);
							})}
						</div>
					)}

					{classList.name == "美妆" && (
						<div style={{ width: "100%", overflow: "hidden" }}>
							{classList.title.map((l, d) => {
								return (
									<div key={d} style={{ width: "100%", overflow: "hidden" }}>
										<h2
											style={{
												lineHeight: "1rem",
												fontSize: "0.3rem",
												textIndent: "0.3rem",
												fontWeight: 700
											}}
										>
											{l.categoryName}
										</h2>
										{l.childCategoryList.map((f, o) => {
											return (
												<div
													key={o}
													style={{
														width: "2rem",
														float: "left",
														overflow: "hidden"
													}}
												>
													<img
														style={{
															height: "1.5rem",
															width: "auto",
															margin: "0 auto"
														}}
														src={f.categoryLogoUrl}
														alt=""
													/>
													<p
														style={{
															textAlign: "center",
															lineHeight: "0.5rem"
														}}
													>
														{f.categoryName}
													</p>
												</div>
											);
										})}
									</div>
								);
							})}
						</div>
					)}

					{classList.name == "婴童" && (
						<div style={{ width: "100%", overflow: "hidden" }}>
							{classList.title.map((l, d) => {
								return (
									<div key={d} style={{ width: "100%", overflow: "hidden" }}>
										<h2
											style={{
												lineHeight: "1rem",
												fontSize: "0.3rem",
												textIndent: "0.3rem",
												fontWeight: 700
											}}
										>
											{l.categoryName}
										</h2>
										{l.childCategoryList.map((f, o) => {
											return (
												<div
													key={o}
													style={{
														width: "2rem",
														float: "left",
														overflow: "hidden"
													}}
												>
													<img
														style={{
															height: "1.5rem",
															width: "auto",
															margin: "0 auto"
														}}
														src={f.categoryLogoUrl}
														alt=""
													/>
													<p
														style={{
															textAlign: "center",
															lineHeight: "0.5rem"
														}}
													>
														{f.categoryName}
													</p>
												</div>
											);
										})}
									</div>
								);
							})}
						</div>
					)}
				</ul>
			</div>
		);
	}
}
