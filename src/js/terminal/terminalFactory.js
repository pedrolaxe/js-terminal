(function(Terminal) {
    Terminal.TerminalFactory = {
        create: function() {
            return Terminal.create({
                results: document.getElementById('terminalReslutsCont'),
                textInput: document.getElementById('terminalTextInput')
            });
        }
    };
})(window.Terminal);