{/* <script> */}
var editor = ace.edit("editor");
// Chromeのコンソールの警告を解消
editor.$blockScrolling = Infinity;

// 自動補完、スニペット、ライブ補完
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

var themeName = "chrome";
var modeName = "javascript";
var fontSize = 14;

// テキストエディタのテーマを設定する
editor.setTheme("ace/theme/" + themeName);
// 言語モード
editor.getSession().setMode("ace/mode/" + modeName);
// フォントサイズ
editor.setFontSize(fontSize);
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

// </script>