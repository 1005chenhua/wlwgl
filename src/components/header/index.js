import React from 'react';
import { Dropdown, Icon, Menu } from 'antd';
import { createHashHistory } from 'history';
const history = createHashHistory();

const ticking = () => {
  return (
    <span>{new Date().toLocaleTimeString()}</span>
  );
};
const number = 1000;
// setInterval(ticking(), number);
export default () => {
  const menu = (
    <Menu style={{ marginRight: '50px' }}>
      <Menu.Item onClick={() => {
        history.push('/DeviceManage');
      }}>
        <span>设备管理</span>
      </Menu.Item>
      <Menu.Item onClick={() => {
        history.push('/CallpoliceManage');
      }}>
        <span>报警管理</span>
      </Menu.Item>
      <Menu.Item onClick={() => {
        history.push('/JournalManage');
      }}>
        <span>日志管理</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="dashboard-container-header">
      <div className="head-date">
        {ticking()}
      </div>
      <div className="head-title">
        <h1>物联网管控平台</h1>
      </div>
      <div className="head-container-tools">
        <span className="item">
          <img src={require('../../assets/images/dashboard/return.png')} alt="" onClick={() => {
            history.goBack();
          }} />
          <Dropdown overlay={menu} onClick={() => {
            history.push('/Home');
          }}>
            <img src={require('../../assets/images/dashboard/panl.png')} alt="" />
          </Dropdown>
          <span>hello, admin</span>
          <Icon type="caret-down" />
        </span>
      </div>
    </div>
  );
};

