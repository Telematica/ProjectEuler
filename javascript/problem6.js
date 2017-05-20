function squareSum(limit) {
	let sum = 0;

	for (let i = 0;i <= limit;i++) {
		sum += Math.pow(i,2);
	}

	return sum;
}

function squareOfSum(limit) {
	let sum = 0;

	for (let i = 0;i <= limit;i++) {
		sum += i;
	}

	return Math.pow(sum, 2);
}

console.log(squareOfSum(100) - squareSum(100)); 

