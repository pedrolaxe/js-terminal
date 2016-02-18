(function(Terminal, _) {
    Terminal.commands.searchOnGoogleCommand = {
        name: 'google',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type google + something to search for.'
        },
        execute: function(search) {
            window.open('https://www.google.com.br/search?q=' + search, '_blank');
            return '<i>I\'ve searched on Google for <b>' + _.escape(search) + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal, window.underscore);