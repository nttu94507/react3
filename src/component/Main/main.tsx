import React from 'react';
import {Switch, Route, Link, HashRouter,} from 'react-router-dom';
import List from '../List'
import TodoList from '../TodoList';
import Content from '../Content';
import ProbeList from '../ProbeList';

const Main = () => (
  <div>
    <ul>
      <li><Link to="/" data-testid="homeLink">首頁</Link></li>
      <li><Link to="/todolist" data-testid="todolistLink">待辦事項</Link></li>
      <li><Link to="/probelist" data-testid="todolistLink">Probe 列表</Link></li>
      <p>test</p>
    </ul>
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/todolist" component={TodoList} />
      <Route path="/probelist" component={ProbeList} />
      <Route path="/list/:taskName" component={List} />
    </Switch>
  </div>
);

export default Main;
