import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { RouteList, asyncRoutes } from '@/router';
import { createHashHistory } from 'history';
import Header from '@/components/header';
import Devicelog from './devicelog';
import Platformlog from './platformlog';
// import DevAlarm from './devAlarm';
const history = createHashHistory();

// eslint-disable-next-line complexity
const Device = () => {
  const [visible, setVisible] = useState('0');
  return (
    <div className="layout-container">
      <Header />
      <div className="footer">
        <div className="tabInfo">
          <p>位置信息 : <span>设备日志</span></p>
          <div className="tab">
            <div onClick={() => setVisible('0') } style={{ color: visible === '0' ? '#00CCFF' : '#fff' }} >设备日志</div>
            <div onClick={() => setVisible('1') } style={{ color: visible === '1' ? '#00CCFF' : '#fff' }} >平台日志</div>
          </div>
        </div>
        {
          visible === '0' ? (<Devicelog />) : (<Platformlog />)
        }
      </div>
    </div>
  );
};
export default connect()(Device);
