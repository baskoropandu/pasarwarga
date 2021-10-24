import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import HomePage from './pages/Home'
import Details from './pages/Details'


export default function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-300">
        <BrowserRouter>
          <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src="https://ik.imagekit.io/ztg2jcaeb0e/Untitled_design_5__EzL5SImP8.png?updatedAt=1635061909377" alt="" className="w-20 h-20 text-white p-1 bg-white rounded-full" />
                <span className="ml-5 text-5xl">Articles</span>
              </Link>
            </div>
          </header>
          <Switch>
            <Route path="/articles/:id">
              <Details/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}


