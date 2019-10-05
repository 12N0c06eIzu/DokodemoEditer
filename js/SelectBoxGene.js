function createSelectBox() {
    //連想配列の配列
    var arr = [
        {
            val: "javascript",
            txt: "JavaScript"
        },
        {
            val: "html",
            txt: "HTML"
        },
        {
            val: "php",
            txt: "PHP"
        }
  ];

    //連想配列をループ処理で値を取り出してセレクトボックスにセットする
    for (var i = 0; i < arr.length; i++) {
        let op = document.createElement("option");
        op.value = arr[i].val; //value値
        op.text = arr[i].txt; //テキスト値
        document.getElementById("languageList").appendChild(op);
    }
};

createSelectBox();
