let paramInteger = 10;
let paramFloat = 3.14;
console.log(paramInteger);
console.log(paramFloat);

paramFloat = paramInteger;
console.log(paramInteger);
console.log(paramFloat);

paramInteger = 30;
console.log(paramInteger);
console.log(paramFloat);

実行結果のコンソール出力
10
3.14
10
10
30
10