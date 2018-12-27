import C from './constants';
import fetch from 'isomorphic-fetch'

export const addDay = (resort, date, poweder=false, backcountry=false) => ({type: C.ADD_DAY, payload: {resort, date, poweder, backcountry}});

export const removeDay = date => ({type: C.REMOVE_DAY, payload: date});

export const setGoal = goal => ({type: C.SET_GOAL, payload: goal});

export const addError = error => ({type: C.ADD_ERROR, payload: error});

export const clearError = errorID => ({type: C.CLEAR_ERROR, payload: errorID});

export const changeSuggestions = suggestions => ({type: C.CHANGE_SUGGESTIONS, payload: [...suggestions]});

export const clearSuggestions = () => ({type: C.CLEAR_SUGGESTIONS});

export const suggestResortNames = value => dispatch => {
  dispatch({
    type: C.FETCH_RESORT_NAMES
  });

  fetch('http://localhost:3333/resorts/' + value)
  .then(responce => responce.json())
  .then(suggestions => {
    console.log(window);
    dispatch({
      type: C.CHANGE_SUGGESTIONS,
      payload: suggestions
    });
  })
  .catch(error => {
    dispatch(addError(error.message));
    dispatch({
      type: C.CANCEL_FETCHING
    });
  })
};
