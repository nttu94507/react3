import React from 'react';
import { Switch, Route, Link, HashRouter, } from 'react-router-dom';
import List from '../List'
import Content from '../Content';
import ProbeList from '../ProbeList';
import styles from './index.scss';
import Editprobe from '../Editprobe';
import Dashboard from '../Dashboard';
import Probe from '../Probe';
import DeviceList from '../DeviceList/DeviceList';
import Customer from '../Customer';

const Main = () => (
  <div className={styles.main}>
    <div className={styles.left} >
      <div className={styles.sidemenu}>
      <Link to="/" data-testid="homeLink"><div className={styles.sidemenuBtn}>首頁</div></Link>
      <Link to="/probelist" data-testid="probelistLink"><div className={styles.sidemenuBtn}>Probe 管理</div></Link>
      <Link to="/customer" data-testid="customer"><div className={styles.sidemenuBtn}>客戶管理</div></Link>
      </div>
    </div>
    <div className={styles.right}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/probelist" component={ProbeList} />
        <Route path="/detail/:Id" component={Probe} />
        <Route path="/editprobe" component={Editprobe} />
        <Route path="/customer" component={Customer} />
        <Route path="/list/:taskName" component={List} />
      </Switch>
    </div>
  </div>
);

export default Main;
