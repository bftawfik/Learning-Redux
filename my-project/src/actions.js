import C from './constants';

export const addDay = (resort, date, poweder=false, backcountry=false) => ({type: C.ADD_DAY, payload: {resort, date, poweder, backcountry}});

export const removeDay = date => ({type: C.REMOVE_DAY, payload: date});

export const setGoal = goal => ({type: C.SET_GOAL, payload: goal});

export const addError = error => ({type: C.ADD_ERROR, payload: error});

export const clearError = errorID => ({type: C.CLEAR_ERROR, payload: errorID});

export const changeSuggestions = suggestions => ({type: C.CHANGE_SUGGESTIONS, payload: [...suggestions]});

export const clearSuggestions = () => ({type: C.CLEAR_SUGGESTIONS});
