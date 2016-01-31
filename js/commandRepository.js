(function(global, CommandDecorator) {
    global.CommandRepository = {
        _data: [],
        register: function(command) {
            var commandDecorated = CommandDecorator.decorate(command);
            this._data.push(commandDecorated);
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
})(window, window.CommandDecorator);