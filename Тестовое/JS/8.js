//Сделать функцию которая обрезает массив до указанного значения.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_skip_until(arr, value) {
	var res = [];
	var i = 0;
	var flag = false;
	arr.forEach((item) => {
		if (!flag){
			if (item === value)
				flag = true;
		}
		if (flag) {
			res[i++] = item;
		}
	});
	return res;
}

let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, "asd") // []
console.log(result);
console.log(result2);
console.log(result3);