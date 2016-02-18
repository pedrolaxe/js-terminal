(function(Terminal, _) {
    Terminal.commands.searchOnIiissaCommand = {
        name: 'iiissa',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type iiissa + something to search for.'
        },
        execute: function(search) {
            window.open('https://iiissa.com.br/buscar?q=' + search + '&tipo=emp', '_blank');
            return '<i>I\'ve searched on IIISSA for <b>' + _.escape(search) + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal, window.underscore);