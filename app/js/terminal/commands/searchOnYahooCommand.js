(function(repository) {
    repository.register({
        name: 'yahoo',
        parameter: {
            name: 'search',
            messageIfMissing: 'Type yahoo + something to search for.'
        },
        action: function(search) {
            window.open('https://br.search.yahoo.com/search?p=' + search, '_blank');
        },
        response: function(search) {
            return '<i>I\'ve searched on Yahoo for <b>' + search + '</b> it should be opened now.</i>';
        }
    });
})(window.CommandRepository);
