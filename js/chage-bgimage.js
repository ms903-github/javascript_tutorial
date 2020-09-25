window.onload = changebgImage; // windowは省略可能

function changebgImage() {
    var dateObject = new Date();
    var hour = dateObject.getHours();

    if (hour < 12) {
        var bgImage = "images/morning.jpg";
    }
    else if (hour >= 12 && hour < 17) {
        var bgImage = "images/noon.jpg";
    }
    else {
        var bgImage = "images/evening.jpg";
    }
    document.body.style.backgroundImage = `url(${bgImage})`;
}

/*　メモ
比較演算子について
10 == "10" はTrue
10 === "10"はFalse
 */