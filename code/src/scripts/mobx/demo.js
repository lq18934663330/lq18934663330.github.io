import { observable, action, computed, autorun } from "mobx";

class Demo {
	@observable count = 2020; //state
	@observable city = "北京";
	@action countAdd = () => {
		this.count++;
	};
	//计算属性
	@computed get newCount() {
		return this.count * 2;
	}
	@action countDesc = payload => {
		this.count -= payload;
	};
	@action changeCount = payload => {
		this.count += payload;
	};
}
export default new Demo();
