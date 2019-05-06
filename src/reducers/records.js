import {
  getDate,
  getName,
  getValue,
  names,
  roles,
  surnames,
  statuses,
} from '../utils';

const initialState = Array(10)
  .fill(null)
  .map((i, id) => ({
    id: id + 1,
    name: getName(names, surnames),
    role: getValue(roles),
    connected: getDate(),
    status: getValue(statuses),
  }));

const records = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_RECORD':
      return state.map(r => (r.id === action.record.id ? action.record : r));
    default:
      return state;
  }
};

export default records;
