/*Создать функцию которая нормализует данные в массиве 
исключая или преобразуя не подходящие.*/

let testData4 = [
	{"name":"Vasya","email":"vasya@example.com","age":20},
	{"name":"Dima","email":"dima@example.com","age":34},
	{"name":"Colya","email":"colya@example.com","age":46},
	{"name":"Misha","email":"misha@example.com","age":16},
	{"name":"Ashan","email":"ashan@example.com","age":99},
	{"name":"Rafshan","email":"rafshan@example.com","age":11},
	1,2,1990,85,24,"Vasya","colya@example.com","Rafshan",
	"ashan@example.com",true,false,
	[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan",
	"ashan@example.com",true,false,
	[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]];

function array_normalize(arr, shema, transform = false) {
	var res = [];
	let i = 0;

	if (shema === 'bool')
		shema = 'boolean';
	else if (shema === 'float')
		shema = 'number';

	if (shema === 'number' || shema === 'boolean'
		|| shema === 'function' || shema === 'array')
		transform = false;
	
	arr.forEach((item) => {
		if (transform) {
			if (shema === 'string') {
				if (typeof item != 'object') {
					res[i++] = String(item);
				}
			}
			else if (shema === 'int') {
				if (typeof item === 'number') {
					res[i++] = Math.round(item);
				}
			}
			else if (typeof shema === 'object') {
				 var new_obj = {};
				 var flag = false;
				 var keys_shema = Object.keys(shema).sort();
				 keys_shema.forEach((shema_key) => {
				 	if (item.hasOwnProperty(shema_key)) {
				 		new_obj[shema_key] = item[shema_key];
				 		flag = true;
				 	}
				 });
				 if (flag) {
				 	res[i++] = new_obj;
				 }
			}
		}
		else {
			if (typeof item === shema) {
				res[i++] = item;
			}
			else if (shema === 'int' && typeof item === 'number') {
				if (item == Math.round(item))
					res[i++] = item;
			}
			else if (typeof shema === 'object' && typeof item === 'object') {
				var keys_item = Object.keys(item).sort();
				var keys_shema = Object.keys(shema).sort();
				let isMath = true;
				if (keys_item.length != keys_shema.length)
					isMath = false;
				else {
					for (var j = 0; j < keys_item.length; j++) {
						if (keys_item[j] != keys_shema[j]) {
							isMath = false;
							break;
						}
					}
				}
				if (isMath) {
					var tmpObj = {};
					keys_item.forEach((p) => {
						if (shema[p] === 'bool')
							shema[p] = 'boolean';
						else if (shema[p] === 'float')
							shema[p] = 'number';
						if (shema[p] === typeof item[p])
							tmpObj[p] = item[p];
						else {
							isMath = false;
						}
					});
					if (isMath)
						res[i++] = tmpObj;
				}
			}
		}
	});
	return res;
}

let result = array_normalize(testData4, 'string');
// ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2 = array_normalize(testData4, 'string', true);
// ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = array_normalize(testData4, {age: 'float'}); // []
let result4 = array_normalize(testData4, {age: 'float'}, true);
// [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);