import C from './constants';
import { allSkiDays } from './store/reducers';

const state = [
  {
    "resort": "Kirkwood",
    "date": "2016-12-15",
    "powder": true,
    "backcountry": false
  },
  {
    "resort": "Boreal",
    "date": "2016-12-16",
    "powder": false,
    "backcountry": true
  }
]

const action = {
  type: C.ADD_DAY,
  payload: {
    "resort": "Boreal",
    "date": "2016-12-17",
    "powder": false,
    "backcountry": true
  }
};

const action2 = {
  type: C.REMOVE_DAY,
  payload: "2016-12-15"
};


const nextState = allSkiDays(state, action2);

console.log(`

  initial stateal: ${JSON.stringify(state)}
  action: ${JSON.stringify(action)}
  new state: ${JSON.stringify(nextState)}


`);
// surface pro 2018 4 ram m prossesor 128 go -4 go ram model 1796
