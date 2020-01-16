var editor = ace.edit("editor");

var themeName, modeName, fontSize;
fontSize = 14;
// Chromeのコンソールの警告を解消
editor.$blockScrolling = Infinity;

function setupEditer() {
    window.editor = editor;

    // 自動補完、スニペット、ライブ補完
    // テキストエディタのテーマを設定する
    editor.setTheme("ace/theme/chrome");
    // 言語モード
    editor.getSession().setMode("ace/mode/html");
    // フォントサイズ
    editor.setFontSize(14);
    editor.setValue(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <!--<link rel="stylesheet" href="css/master.css">-->
        <script type="text/javascript" charset="utf-8">
            
        </script>
        <style>
        </style>
        </head>
    
    <body>
        <main>
        </main>
        <footer>
        </footer>
    </body>
    </html>`, 1);

    editor.getSession().on('change', function () {
        update();
    });

    editor.focus();

    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
}

function update() {
    var idoc = document.getElementById('iframe').contentWindow.document;

    idoc.open();
    idoc.write(editor.getValue());
    // idoc.write(editor.getValue());
    idoc.close();
}




function line_check() {
    // エディタの行取得
    var a = editor.session.getLength();
    console.log(a);
}


function outputLanguageSelect(obj) {
    var idl = obj.selectedIndex;
    var valueLanguage = obj.options[idl].value;
    var textLanguage = obj.options[idl].text;

    console.log("value:" + valueLanguage + ",text:" + textLanguage);
    modeName = valueLanguage;

    editor.getSession().setMode("ace/mode/" + modeName);

}


function outputThemeSelect(obj) {
    var idt = obj.selectedIndex;
    var valueTheme = obj.options[idt].value;
    var textTheme = obj.options[idt].text;

    console.log("value:" + valueTheme + ",text:" + textTheme);

    themeName = valueTheme;
    editor.setTheme("ace/theme/" + themeName);

}


function changeFontSizePlus(){
    fontSize += 2;
    editor.setFontSize(fontSize);
    
    console.log(fontSize);
  }
  function changeFontSizeMinus(){
    if(fontSize >= 10){
      fontSize -= 2;
    }
    console.log(fontSize);
    editor.setFontSize(fontSize);
  
  }