function inputChange(event){
  msg.innerText = '入力されたテキスト：' + nameText.value;
}

let nameText = document.getElementById('documentText');
documentText.addEventListener('blur', inputChange);
let msg = document.getElementById('msg');