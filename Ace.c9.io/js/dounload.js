function downloadFile(e){
    var content = editor.getValue();
    var blob = new Blob([content], {type: "text/html"});
    e.target.href = window.URL.createObjectURL(blob);
}
document.getElementById('download').addEventListener('click', downloadFile, false);

