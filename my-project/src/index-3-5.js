import C from './constants';
import storeFactory from './store';

const initialState = JSON.parse(localStorage['redux-store'] || "{}") ;
console.log(initialState);
const saveState = () => {
	const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
}

const store = storeFactory();
store.subscribe(saveState);

store.dispatch({
	type: C.ADD_DAY,
	payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-28",
    "powder": false,
    "backcountry": true
  }
});

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Squaw Valley",
		"date": "2016-3-28",
		"powder": true,
		"backcountry": false
	}
});

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "The Canyons",
		"date": "2016-1-2",
		"powder": false,
		"backcountry": true
	}
});
