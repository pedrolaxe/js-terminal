(function(repository) {
    repository.register({
        name: 'date',
        response: function() {
            var timeAndDate = new Date(),
                dateDay = timeAndDate.getDate(),
                dateMonth = timeAndDate.getMonth() + 1,
                dateYear = timeAndDate.getFullYear();
            
            console.log(dateDay);

            return dateDay + '/' + dateMonth + '/' + dateYear;
        }
    });
})(window.CommandRepository);