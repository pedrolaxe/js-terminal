(function(Terminal, _) {
    Terminal.CommandDecorator = {
        _transformToFunction: function(response) {
            if (_.isArray(response)) {
                response = response.join('<br>');    
            }
            
            if (typeof response === 'string') {
                return function() {
                    return response;
                };
            }
            
            return response || _.noop;
        },
        decorate: function(command) {
            var name = command.name || '',
                aliases = command.aliases || [],
                execute = command.execute || this._transformToFunction(command.response);
                
            return {
                name: name,
                aliases: aliases,
                aliasesAndName: aliases.concat([ name ]), 
                parameter: command.parameter || null,
                execute: function(param) {
                    if (param === '' && this.parameter) {
                        return this.parameter.messageIfMissing;
                    }
                    
                    return execute(param);
                }
            };
        }
    };
})(window.Terminal, window.underscore);