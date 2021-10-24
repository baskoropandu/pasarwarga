import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/">

          </Route>
          <Route path="/articles/:id">

          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}


