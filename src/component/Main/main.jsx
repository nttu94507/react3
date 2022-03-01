import React from 'react';
import {Switch, Route, Link, HashRouter,} from 'react-router-dom';
import List from '../List'
import TodoList from '../TodoList';
import Content from '../Content';

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

export default Main;
