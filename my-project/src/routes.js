import React from 'react'
import { App, Whoops404 } from './components'
import { BrowserRouter, Switch, Route } from "react-router-dom";

const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/add-day" component={App}/>
        <Route exact path="/list-days" component={App}/>
        <Route exact path="/list-days/:filter" component={App}/>
        <Route exact path="*" component={Whoops404}/>
      </Switch>
    </BrowserRouter>
)

export default routes
