import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';

let state = initialState;

state = appReducer(state, {
  type: C.SET_GOAL,
  payload: 2
})

state = appReducer(state, {
  type: C.CHANGE_SUGGESTIONS,
  payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})

state = appReducer(state, {
  type: C.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-28",
    "powder": false,
    "backcountry": true
  }
})


console.log(`

    Initial state
    ========================
    Goal = ${state.goal}
    resorts = ${JSON.stringify(state.allSkiDays)}
    fetchig = ${JSON.stringify(state.resortNames.fetching)}
    suggestions = ${JSON.stringify(state.resortNames.suggestions)}
`);
