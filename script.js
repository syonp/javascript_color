// JavaScript

//console.log('Hello world!');
//console.log(document.getElementById('myColor').value);

//document.getElementById('ID名')
//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

text.textContent = 'code：' + color.value;

function changeColor() {
    // カラーコードを表示
    text.textContent = color.value;
    if (color.value === '#ffffff') {
        text.textContent = 'code：' + color.value + '(white)';
    } else if (color.value === '#000000') {
        text.textContent = 'code：' + color.value + '(black)';
    }
    else {
        text.textContent = 'code：' + color.value;
    }
    // 背景色を変更
    document.body.style.backgroundColor = color.value;
}

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);
