(function(Terminal) {
    function padLeft(value, totalWidth, paddingChar){
        return Array(totalWidth - value.toString().length + 1).join(paddingChar || '0') + value;
    }
    
    Terminal.commands.replyToTimeCommand = {
        name: 'time',
        response: function() {
            var timeAndDate = new Date(),
                timeHours = padLeft(timeAndDate.getHours(), 2),
                timeMinutes = padLeft(timeAndDate.getMinutes(), 2);
            
            console.log(timeAndDate.getDate());

            return timeHours + ":" + timeMinutes;
        }
    };
})(window.Terminal);