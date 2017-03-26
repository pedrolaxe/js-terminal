import CommandRepository from './commandRepository';
import commands from './commands';

const commandRepositoryFactory = () => CommandRepository.create(commands);

export default commandRepositoryFactory;
