(function(repository) {
    repository.register({
        name: 'youtube',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type youtube + something to search for.'
        },
        action: function(search) {
            window.open('https://www.youtube.com/results?search_query=' + search, '_blank');
        },
        response: function(search) {
            return '<i>I\'ve searched on YouTube for <b>' + search + '</b> it should be opened now.</i>';
        }
    });
})(window.CommandRepository);