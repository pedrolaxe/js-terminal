(function(Terminal) {
    Terminal.commands.searchOnYoutubeCommand = {
        name: 'youtube',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type youtube + something to search for.'
        },
        execute: function(search) {
            window.open('https://www.youtube.com/results?search_query=' + search, '_blank');
            return '<i>I\'ve searched on YouTube for <b>' + search + '</b> it should be opened now.</i>';
        }
    };
})(window.Terminal);