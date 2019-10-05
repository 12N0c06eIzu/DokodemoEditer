function createSelectBox(listName) {
  //連想配列の配列
  var list = [
    { val: "javascript", txt: "JavaScript" },
    { val: "html", txt: "HTML" },
    { val: "php", txt: "PHP" }
];

  //連想配列をループ処理で値を取り出してセレクトボックスにセットする
  for (var i = 0; i < list.length; i++) {
    let op = document.createElement("option");
    op.value = list[i].val;  //value値
    op.text = list[i].txt;   //テキスト値

    console.log(op.value + "," + op.text);
    
    document.getElementById(listName).appendChild(op);
  }
};
