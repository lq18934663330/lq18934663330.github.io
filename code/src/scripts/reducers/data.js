import immutable from "immutable";
const defaultState = immutable.fromJS({
	banner: [],
	count: 2020,
	city: "美丽的中国",
	goodList: [],
	goodType: [],
	FList: [],
	FType: [],
	goodsList: [],
	goodsDetail: [],
	searchList: []
});
export const data = (state = defaultState, action) => {
	console.log(action);
	switch (action.type) {
		case "changeCount":
			return state.update("count", x => x + action.payload);
		case "changeCity":
			return state.set("city", action.payload);
		case "getBanner":
			return state.set("banner", action.payload);
		case "getGoodList":
			return state.set("goodList", action.payload);
		case "getGoodType":
			return state.set("goodType", action.payload);
		case "getFList":
			return state.set("FList", action.payload);
		case "getFType":
			return state.set("FType", action.payload);
		case "getGoodsList":
			return state.set("goodsList", action.payload);
		case "getGoodsDetail":
			return state.set("goodsDetail", action.payload);
		case "getSearchList":
			return state.set("searchList", action.payload);
		default:
			return state;
	}
};
