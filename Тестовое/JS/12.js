/*Создать функцию которая создает объект на основании двух 
представленных массивов используя один как ключи, а другой как 
значения. Не подходящие ключи массивов должны быть исключены.*/

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_combine(keys, values) {
	var res = {};
	var i = 0;
	array_unique(keys).forEach((item) => {
		if (typeof item === 'string' || typeof item === 'number') {
			res[item] = values[i++];
		}
	});
	return res;
}

let result = array_combine(testData, testData2)
console.log(result);
/* {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5,
"colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}*/



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