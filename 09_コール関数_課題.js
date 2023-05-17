// 1から100の配列を作成
a = [];
for (i=1; i <= 100; i++) {
  a.push(i);
}

let b3 = a.filter(function(e) {
	if (e % 3 == 0){
	return true;
} else {
	false;
}
});

let b5 = a.filter(function(e) {
	if (e % 5 == 0){
	return true;
} else {
	false;
}
});
console.log('b3回答:' + b3);
console.log('b5回答:' + b5);
