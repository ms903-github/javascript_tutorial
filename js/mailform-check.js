window.onload = mailformCheck;

function mailformCheck() {
    var submitList = document.getElementsByName("submit_btn");
    var submit = submitList[0];
    // 最初は無効
    submit.disabled = true;
    var subject = document.getElementsByName("subject")[0];
    subject.value = "default"

    var checkboxList = document.getElementsByName("agreement");
    var checkbox = checkboxList[0];

    // チェックボックスが押されたらtoggleCheckbox
    checkbox.onclick = toggleCheckbox;

    var formList = document.getElementsByTagName("form");
    var form = formList[0]

    // form.onsubmit = submitHandler;
    form.onsubmit = checkForm;
}

function toggleCheckbox() {
    // submit_btnを取得し直し
    var submitList = document.getElementsByName("submit_btn");
    var submit = submitList[0];

    // thisはcheckbox?
    var checked = this.checked;

    if (checked === true) {
        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }


}

function submitHandler() {
    var result = confirm("送信してもよろしいですか？")

    if (result === true) {
        return true; //trueを送信イベントハンドラに返せば正常送信
    }
    else {
        return false;
    }
}

function checkForm() {
    var name = document.getElementsByName("name")[0];

    var email = document.getElementsByName("email")[0];

    if (name.value == "" || email.value == "") {
        alert("お名前とemailを入力してください")
        return false;
    }
    else {
        var result = confirm("送信してもよろしいですか？")
        return result;
    }

}

/*　メモ
alert : ただのウィンドウ表示
confirm : ok, キャンセルの二択になる
formオブジェクト：
.valueで値にアクセス
.submitで送信
 */