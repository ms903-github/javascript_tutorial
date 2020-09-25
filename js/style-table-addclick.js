window.onload = focusline;

function focusline() {
    var tbl = document.getElementById("style-table")
    var trList = tbl.getElementsByTagName("tr")

    for (var i = 0; i < trList.length; i++) {
        trList[i].onmouseover = highlight;
        trList[i].onmouseleave = highlightout;
        trList[i].onclick = getColorData;
    }
}

function highlight() {
    this.className = "active";
}

function highlightout() {
    this.className = "";
}

function getColorData() {
    var cells = this.getElementsByTagName("td");
    var color = cells[2];
    var data = color.innerHTML;
    alert(data);
}

/* メモ
.innerHTMLでタグの中身を参照する
 */