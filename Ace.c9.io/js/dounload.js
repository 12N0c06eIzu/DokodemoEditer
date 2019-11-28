// (function() {
//     // Aタグのhref属性に、Blobを設定する。
//     // Blobに含めるデータは、引数で指定する。
//     function setBlobUrl(id, content) {
//         // 指定されたデータを保持するBlobを作成する。
//         var blob = new Blob([ content ], { "type" : "text/html" });

//         // Aタグのhref属性にBlobオブジェクトを設定する。
//         window.URL = window.URL || window.webkitURL;
//         $("#" + id).attr("href", window.URL.createObjectURL(blob));
//     }

//     $("#editor").keyup(function(){
//         setBlobUrl("download", $("#editor").val());
//     });

//     $("#editor").keyup();
// })();
function downloadFile(e){
    // var content = document.getElementById('iframe').value;
    var content = editor.getValue();
    // const content = document.getElementById("ace_text_input").value;
    var blob = new Blob([content], {type: "text/html"});
    e.target.href = window.URL.createObjectURL(blob);
}
document.getElementById('download').addEventListener('click', downloadFile, false);

