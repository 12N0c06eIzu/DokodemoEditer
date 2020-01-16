function createSelectBox(arrayName, listName) {
console.log(listName);

console.log(arrayName);

  //連想配列をループ処理で値を取り出してセレクトボックスにセットする
  for (var i = 0; i < arrayName.length; i++) {
    let op = document.createElement("option");
    op.value = arrayName[i].val;  //value値
    op.text = arrayName[i].txt;   //テキスト値

    console.log(op.value + "," + op.text);
    
    document.getElementById(listName).appendChild(op);
  }
};


