/* eslint-disable react/self-closing-comp */
import React,{ useState } from 'react';
import { Dropdown, Icon, Menu } from 'antd';
import { createHashHistory } from 'history';
const history = createHashHistory();

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
  const [time,setTime] = useState('');
  const week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
  const today = new Date();
  const currTime = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
  const currWeek = new Date(Date.parse(currTime.replace(/-/g, '/')));
  const ticking = () => {
    setTime(today.toLocaleTimeString());
  };
  setTimeout(ticking, '1000');
  return (
    <div className="dashboard-container-header">
      <div className="head-date">
        {`${today.getFullYear()}年${(today.getMonth() + 1)}月${today.getDate()}日`}
        <span style={{ margin: '0 15px' }}>{week[currWeek.getDay()]}</span>
        <span>{time}</span>
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

