(function(Terminal) {
    Terminal.CommandRepository = {
        _data: [],
        register: function(commands) {
            for (var i = 0, ii = commands.length; i < ii; i++) {
                this._data.push(commands[i]);
            }
        },
        findByCommandText: function(commandText) {
            return this._data.find(function(command, index, obj) {
                var aliasesAndName = command.aliasesAndName;
                
                if (command.parameter) {
                    return !!aliasesAndName.find(function(aliasOrName) {
                        return commandText.indexOf(aliasOrName) === 0;
                    });
                }
                
                return aliasesAndName.indexOf(commandText) !== -1;
            });
        }
    };
})(window.Terminal);