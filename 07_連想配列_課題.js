let fruits = {
'apple':'りんご',
'strawberry':'いちご',
'grape':'ぶどう',
'lemon':'れもん'
};

console.log('2.' + fruits['grape']);

for (key in fruits) {
	console.log('3.' + key);
}

for (key in fruits) {
	console.log('4.' + fruits[key]);
}