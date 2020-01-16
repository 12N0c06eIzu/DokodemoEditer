function downloadFile(e){
    var content = editor.getValue();
    var blob = new Blob([content], {type: "text/html"});
    // e.target.href = window.URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "index.html";
    link.click();
}


var element = document.getElementById("s_file");
var result = document.getElementById("editer");


element.onchange = function(){
    var fileReader = new FileReader();

    fileReader.onload = function(){

        editor.setValue(this.result);
    }

    var file = element.files[0];
    fileReader.readAsText(file);

}