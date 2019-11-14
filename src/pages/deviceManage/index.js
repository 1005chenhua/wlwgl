import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { RouteList, asyncRoutes } from '@/router';
import { createHashHistory } from 'history';
import Header from '@/components/header';
import Detection from './detection';
import DevManage from './devManage';
import DevAlarm from './devAlarm';
const history = createHashHistory();

// eslint-disable-next-line complexity
const Device = () => {
  const [visible, setVisible] = useState('2');
  return (
    <div className="layout-container">
      <Header />
      <div className="footer">
        <div className="tabInfo">
          <p>位置信息 : <span>设备管理</span></p>
          <div className="tab">
            <div onClick={() => setVisible('0') } style={{ color: visible === '0' ? '#00CCFF' : '#fff' }} >检测分析</div>
            <div onClick={() => setVisible('1') } style={{ color: visible === '1' ? '#00CCFF' : '#fff' }} >设备管理</div>
            <div onClick={() => setVisible('2') } style={{ color: visible === '2' ? '#00CCFF' : '#fff' }} >设备报警</div>
          </div>
        </div>
        {
          visible === '0' ? (<Detection />) : (visible === '1' ? (<DevManage />) : (<DevAlarm />))
        }
      </div>
    </div>
  );
};
export default connect()(Device);
