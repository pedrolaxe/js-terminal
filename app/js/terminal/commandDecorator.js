(function(Terminal) {
    var emptyFunction = function() {},
        isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };

    Terminal.CommandDecorator = {
        _transformToFunction: function(response) {
            if (isArray(response)) {
                response = response.join('<br>');    
            }
            
            if (typeof response === 'string') {
                return function() {
                    return response;
                };
            }
            
            return response || emptyFunction;
        },
        _execute: function(param) {
            if (param === '' && this.parameter) {
                return this.parameter.messageIfMissing;
            }
            
            this.action(param);
            return this.response(param);
        },
        decorate: function(command) {
            var name = command.name || '',
                aliases = command.aliases || [];
                
            return {
                name: name,
                aliases: aliases,
                aliasesAndName: aliases.concat([ name ]), 
                parameter: command.parameter || null,
                action: this._transformToFunction(command.action),
                response: this._transformToFunction(command.response),
                execute: this._execute
            };
        }
    };
})(window.Terminal);