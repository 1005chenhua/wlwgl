import React from 'react';
import { Menu } from 'antd';
import { RouteList } from '@/router';
import { createHashHistory } from 'history';
import Header from '@/components/header';
import Devmanage from './devManage';

const history = createHashHistory();

export default () => (
  <div className="layout-container">
    <Header />
    <div className="layout-container-content" >
      <Devmanage />
    </div>
  </div>
);
