//Сделать функцию поиска значений в массиве.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

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

let result = array_find(testData, /^raf.*/i) // ["Rafshan"]
let result2 = array_find(testData, "Rafshan") // ["Rafshan"]
let result3 = array_find(testData, 123) // null
console.log(result);
console.log(result2);
console.log(result3);