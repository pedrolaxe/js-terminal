(function(Terminal) {
    Terminal.commands.searchOnWikiCommand = {
        name: 'wiki',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type wiki + something to search for.'
        },
        execute: function(search) {
            window.open('https://pt.wikipedia.org/w/index.php?search=' + search, '_blank');
            return '<i>I\'ve searched on Wikipedia for <b>' + search + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal);