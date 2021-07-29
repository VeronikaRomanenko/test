/*Написать функцию для выполнения параллельных вычислений 
без использования Promise.*/

var a = function(one, two) {
  return one + two;
}
var b = function() {
  return false;
}
paralell([[a, [1, 2]], [b]], function(results) {
    console.log(results); // [3, false]
});

async function paralell(funcsArr, func) {
	var arr = [];
	var params = funcsArr[0][1];
	arr[0] = await funcsArr[0][0](params[0], params[1]);
	arr[1] = await funcsArr[1][0]();
	func(arr);
}