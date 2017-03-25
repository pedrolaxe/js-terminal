import CommandRepository from './commandRepository';
import commands from './commands';

const commandRepositoryFactory = () => {
  return CommandRepository.create(commands);
};

export default commandRepositoryFactory;
