import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import sampleData from './initialState.json'

import {Provider} from 'react-redux';

import storeFactory from './store';

import { addError } from './actions';

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

console.log(initialState);
const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {console.log(error.message);return store.dispatch(addError(error.message))};
const store = storeFactory(initialState);
store.subscribe(saveState);

window.React = React
window.store = store;
window.addEventListener("error", handleError);

render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('react-container')
)
