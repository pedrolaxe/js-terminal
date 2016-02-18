(function(Terminal, _) {
    Terminal.commands.searchOnYahooCommand = {
        name: 'yahoo',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type yahoo + something to search for.'
        },
        execute: function(search) {
            window.open('https://br.search.yahoo.com/search?p=' + search, '_blank');
            return '<i>I\'ve searched on Yahoo for <b>' + _.escape(search) + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal, window.underscore);
