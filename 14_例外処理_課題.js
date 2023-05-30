var i = parseInt(Math.random() * 6);
var a = [1,2,3];

try {
   console.log(a[i]);
  if (i > 3){
    console.log(i);
    console.log('iは範囲外です');
  }
 
} catch (e){
  console.log(e);
} finally {
  console.log('end');
}