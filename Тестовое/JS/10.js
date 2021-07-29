//Сделать функцию которая возвращает уникальные элементы массива.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_find(arr, search) {
	let res = null;
	arr.forEach((item) => {
		if (typeof item === 'string') {
			if (item.search(search) != -1)
				res = item;
		}
		else if (item === search)
			res = item;
	})
	return res;
}

function array_unique(arr) {
	var new_arr = [];
	var i = 0
	arr.forEach((item) => {
		if (array_find(new_arr, item) == null)
			new_arr[i++] = item;
	});
	return new_arr;
}

let result = array_unique(testData.concat(testData2))
console.log(result);
// [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
