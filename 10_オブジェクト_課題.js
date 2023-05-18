//りんご、みかん、ぶどうという果物のオブジェクトを定義
let apple = {
    name:  'りんご',
    color: 'red',
    weight: 500,
    size: 'big',
};

let orange = {
    name: 'みかん',
    color: 'yellow',
    weight: 200,
    size: 'middle',
};

let grape = {
    name: 'ぶどう',
    color: 'green',
    weight: 100,
    size: 'small',
};

let fruits = [apple, orange, grape];

fruits.forEach(e => {
    console.log(e.name + '：' + e.weight + 'g');
});

let total = fruits.reduce((sum, i) => sum + i.weight, 0);

console.log('合計：' + total + 'g');



/*let total = fruits.reduce(function(sum,element){
    return sum + element.weight;
}, 0); */