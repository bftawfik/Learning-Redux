import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { App, Whoops404 } from './components'

const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/:filter" component={App}/>
        <Route exact path="/:filter/:filter2" component={App}/>
        <Route exact path="*" component={Whoops404}/>
      </Switch>
    </BrowserRouter>
)

export default routes
/*
<Route exact path="add-day" component={AddDayForm}/>
<Route exact path="list-days" component={SkiDayList}>
    <Route exact path=":filter" component={SkiDayList}/>
</Route>

*/
