// var buildDom = require("ace/lib/dom").buildDom;

var refs = {};
function updateToolbar() {
    refs.saveButton.disabled = editor.session.getUndoManager().isClean();
    
}
editor.session.setValue(localStorage.savedValue)
    function txtSave() {
        // console.log("sdjjajfajl");
        // console.log(localStorage.savedValue);
        localStorage.savedValue = editor.getValue(); 
        editor.session.getUndoManager().markClean();
        // updateToolbar();
    }
    function txtLoad(){
        editor.setValue(localStorage.savedValue);
    }

    editor.commands.addCommand({
        name: "save",
        exec: txtSave,
        bindKey: { win: "ctrl-s", mac: "cmd-s" }
    });
    