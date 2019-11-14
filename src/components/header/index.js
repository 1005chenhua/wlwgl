import React from 'react';
import { Icon } from 'antd';

const ticking = () => {
  return (
    <span>{new Date().toLocaleTimeString()}</span>
  );
};
const number = 1000;
// setInterval(ticking(), number);
export default () => {
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
          <img src={require('../../assets/images/dashboard/return.png')} alt="" />
          <img src={require('../../assets/images/dashboard/panl.png')} alt="" />
          <span>hello, admin</span>
          <Icon type="caret-down" />
        </span>
      </div>
    </div>
  );
};

