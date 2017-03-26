import _ from '../../underscore';

export default {
  execute(text) {
    return _.escape`<i><b>'${text}'</b> was not found. Type <b>'help'</b></i>.`;
  },
};
