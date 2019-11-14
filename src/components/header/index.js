import React from 'react';
import { Icon } from 'antd';


export default ({ header }) => {
  return (
    <div className="dashboard-container-header">
      <div className="head-date">
        <p>2019年11月11日 星期三 下午16：37</p>
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
