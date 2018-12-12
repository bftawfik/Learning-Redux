import C from './constants';
import storeFactory from './store';

import {addDay, removeDay, setGoal, addError, clearError, changeSuggestions, clearSuggestions} from './actions'

const initialState = JSON.parse(localStorage['redux-store'] || "{}") ;
console.log(initialState);
const saveState = () => {
	const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
}

const store = storeFactory();
store.subscribe(saveState);

store.dispatch(addDay("Heavenly", "2016-10-22"));
store.dispatch(removeDay("2016-10-22"));
store.dispatch(setGoal(55));
