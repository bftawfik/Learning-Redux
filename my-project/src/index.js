import storeFactory from './store';

import {addDay, removeDay, setGoal, addError, clearError, changeSuggestions, clearSuggestions, randomGoals} from './actions'

const store = storeFactory();

store.dispatch(randomGoals());
store.dispatch(randomGoals());
// store.dispatch(removeDay("2016-10-22"));
// store.dispatch(setGoal(55));
