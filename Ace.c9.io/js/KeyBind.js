editor.commands.addCommand({
    name: 'myCommand',
    bindKey: {win: 'Ctrl-M',  mac: 'Command-M'},
    exec: function(editor) {
        //...
    },
    readOnly: true // false if this command should not apply in readOnly mode
});

editor.commands.addCommand({
    name: 'savefile',
    bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
    exec: function(editor) {
        //...
        onSaveFile();
    }
});