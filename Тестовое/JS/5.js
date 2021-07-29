//Выведите все элементы массива используя рекурсию.

let arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 
function recuseLog(arr, i) {
	if (i >= arr.length) {
		return;
	}
	else {
		console.log(arr[i]);
		recuseLog(arr, i + 1);
		return;
	}
}
recuseLog(arr, 0);