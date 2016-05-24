import openWindowCommand from './commands/openWindowCommand';
import replyToCreatorCommand from './commands/replyToCreatorCommand';
import replyToDateCommand from './commands/replyToDateCommand';
import replyToGitCommand from './commands/replyToGitCommand';

const bootstrap = commandRepository => {
  commandRepository.register([
    openWindowCommand,
    replyToCreatorCommand,
    replyToDateCommand,
    replyToGitCommand,
  ]);
};

export default { bootstrap };
