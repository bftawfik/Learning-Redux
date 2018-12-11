import C from './constants';
import appReducer from './store/reducers';
import {createStore} from 'redux';

const initialState = JSON.parse(localStorage['redux-store'] || "{}") ;
const store = createStore(appReducer, initialState);

window.store = store;

store.subscribe( () => console.log(store.getState()) );

store.subscribe( () => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
} );

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-28",
    "powder": false,
    "backcountry": true
  }
});

// store.dispatch({
//   type: C.SET_GOAL,
//   payload: 2
// });
