window.onload = setHighlight;

function setHighlight() {
    // idが"style-table"なるdocument内の要素を取得
    var tbl = document.getElementById("style-table");
    // tblのうち<tr>タグのものをリストで取得
    var trList = tbl.getElementsByTagName("tr");

    for (var i = 0; i < trList.length; i++) {
        // マウスイベントに関数を指定
        trList[i].onmouseover = highlight;
        trList[i].onmouseout = highlightout;
    }
}

function highlight() {
    this.className = "active";
}

function highlightout() {
    this.className = "";
}

/*　メモ
thisは「その関数を呼び出した要素」をさす　その関数を呼び出したイベントハンドラーを差したいときにつかう
上の関数内ではthis = <tr>であり，<tr class="">を書き換えている
*/