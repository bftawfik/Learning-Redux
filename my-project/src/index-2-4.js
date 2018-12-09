import C from './constants';
import { errors } from './store/reducers';

const state = [
  "user not authorized",
  "server feed not found"
];

const action = {
  type: C.ADD_ERROR,
  payload: "cannot connect to server"
};

const action2 = {
  type: C.CLEAR_ERROR,
  payload: 0
};

const nextState = errors(state, action2);

console.log(`

  initial gostateal: ${JSON.stringify(state)}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}


`);
