function downloadFile(e){
    var content = editor.getValue();
    var blob = new Blob([content], {type: "text/html"});
    e.target.href = window.URL.createObjectURL(blob);
}
document.getElementById('download').addEventListener('click', downloadFile, false);

var element = document.getElementById("s_file");
var result = document.getElementById("editer");


element.onchange = function(){
    var fileReader = new FileReader();

    fileReader.onload = function(){
        // console.log(this.result);
        // resultElement.appendChild(new Text(this.result));
        editor.setValue(this.result);
    }

    var file = element.files[0];
    fileReader.readAsText(file);

}