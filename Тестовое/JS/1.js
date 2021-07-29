/*Напишите функцию cloneDeep таким образом, чтобы она была 
способна клонировать переданный как параметр объект.*/

var obj = {"name":"Vasya","email":"vasya@example.com","age":20};
var clone = cloneDeep(obj);
console.log(clone);

function cloneDeep(obj) {
	var clone = {};
    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            clone[prop] = deepClone(obj[prop]);
        } else {
            clone[prop] = obj[prop];
        }
    }

    return clone;
}