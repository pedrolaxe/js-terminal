(function(repository) {
    repository.register({
        name: 'git status',
        response: 'nothing to commit, working directory clean.'
    });
})(window.CommandRepository);