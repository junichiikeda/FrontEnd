let a = 'ゼロ';
if (a > 0) {
    console.log('a=' + a + 'は、正の整数です'); 
} else if (a < 0) {
    console.log('a=' + a + 'は、負の整数です'); 
} else if (a === 0) {
    console.log('a=' + a + 'は、0です'); 
} else {
    console.log('a=' + a + 'は、判定できません');    
}

実行結果のコンソール出力
a=ゼロは、判定できません