(function(global, CommandRepository) {
    global.Terminal = {
        create: function(options) {
            var results = options.results,
                textInput = options.textInput;
                
            return {
                _addTextToResults: function(text) {
                    results.innerHTML += '<p>' + text + '</p>';
                },
                _clearInput: function() {
                    textInput.value = '';
                },
                _scrollToBottomOfResults: function() {
                    results.scrollTop = results.scrollHeight;
                },
                focus: function() {
                    textInput.focus();
                    this._scrollToBottomOfResults();
                },
                enter: function() {
                    var commandText = textInput.value.trim(),
                        command = CommandRepository.findByCommandText(commandText.toLowerCase()),
                        parameter = '',
                        response = '';

                    this._addTextToResults('<p class=\'userEnteredText\'>> ' + commandText + '</p>');
                    
                    if (command) {
                        parameter = commandText.replace(command.name, '').trim();
                        response = command.execute(parameter);
                    }
                    else {
                        response = '<p><i>The command <b>' + commandText + '</b> was not found. Type <b>Help</b> to see all commands.</i></p>';
                    }
                    
                    this._addTextToResults(response);
                    this._clearInput();
                    this._scrollToBottomOfResults();
                }
            };
        }
    };
})(window, window.CommandRepository);