//jsbin link: https://jsbin.com/zifefic/edit?js,console
//polyfill for clearAllTimeout

const _setTimeout = window.setTimeout;
(() => {
	const timers = new Set([]);
	window.setTimeout = (...args) => {
		const timer = _setTimeout(...args);
		timers.add(timer);
		return timer;
	}
	window.clearAllTimeout = () => {
		for (let timer of timers) {
			window.clearTimeout(timer);
		}
		timers.clear();
	};
})();

setTimeout(() => {console.log("Test1");}, 1000);
setTimeout(() => {console.log("Test2");}, 2000);
setTimeout(() => {console.log("Test3");}, 3000);
clearAllTimeout();
setTimeout(() => {console.log("Test4");}, 4000);
