/*Расширить прототип Array, добавив к нему метод добавления 
элемента в начало без использование unshift.*/

Array.prototype.append = function(elem) {
	//this = [elem].concat(this);
	for (var i = this.length - 1; i >= 0; i--) {
		this[i + 1] = this[i];
	}
	this[0] = elem;
}

var arr = [1, 2, 3];
arr.append(0);
console.log(arr);