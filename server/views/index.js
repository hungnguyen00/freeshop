 import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers/web';
import 'semantic-ui-css/semantic.min.scss';
import Web from './containers/web/Web';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
let store = createStore(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(
  <Provider store={store}>
   <Router>
      <Route path="/" render={()=>(<Web store={store}/>)}>
      </Route>
   </Router>
 </Provider>,
    document.getElementById('root')
  )