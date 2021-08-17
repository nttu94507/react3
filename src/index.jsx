import React, { useState, createContext, useContext} from 'react';
import ReactDom from 'react-dom'
import {Switch, Route, Link, HashRouter,} from 'react-router-dom';
import { Provider,useSelector,useDispatch } from 'react-redux';
import store from './store';
import List from './component/List'
import TodoList from './component/TodoList';
import Content from './component/Content';

const Main = () => (
  <div>
    <ul>
      <li><Link to="/">首頁</Link></li>
      <li><Link to="/todolist">待辦事項</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/todolist" component={TodoList} />
      <Route path="/list/:taskName" component={List} />
    </Switch>
  </div>
);

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);