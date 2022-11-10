import React from 'react';
import { Switch, Route, Link, HashRouter, } from 'react-router-dom';
import List from '../List'
import Content from '../Content';
import ProbeList from '../ProbeList';
import styles from './index.scss';
import Editprobe from '../Editprobe/editprobe';

const Main = () => (
  <div className={styles.main}>
    <div className={styles.left} >
      <div className={styles.sidemenu}>
      <Link to="/" data-testid="homeLink"><div className={styles.sidemenuBtn}>首頁</div></Link>
      <Link to="/probelist" data-testid="probelistLink"><div className={styles.sidemenuBtn}>Probe 管理</div></Link>
      </div>
    </div>
    <div className={styles.right}>
      <Switch>
        <Route exact path="/" component={Editprobe} />
        {/* <Route path="/probelist" component={ProbeList} />
        <Route path="/probe/:id" component={Editprobe} />
        <Route path="/list/:taskName" component={List} /> */}
      </Switch>
    </div>
  </div>
);

export default Main;
