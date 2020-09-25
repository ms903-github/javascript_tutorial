// changebg関数はページが全て読み込まれてから使用される関数ですよという宣言
window.onload = changebg;

// ページの背景色を変えるプログラム
function changebg() {
    var num = 1;
    alert(num);
    var bgColor = "#d3d3d3";
    // var bodyElement = document.body;
    // bodyElement.style.backgroundColor = bgColor;
    document.body.style.backgroundColor = bgColor;
}

/* メモ
関数の宣言の仕方
function hoge(){}
と
hoge = function(){}
は等価．変数のように関数を宣言できる
*/