(function(global, Terminal) {
    global.TerminalFactory = {
        create: function() {
            return Terminal.create({
                results: document.getElementById('terminalReslutsCont'),
                textInput: document.getElementById('terminalTextInput')
            });
        }
    }
})(window, window.Terminal);