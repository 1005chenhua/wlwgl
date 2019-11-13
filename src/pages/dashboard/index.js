import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginByUsername } from '@/redux/actions';
import { createHashHistory } from 'history';
import Header from '@/components/header';


const dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />>
      <div className="dashboard-container-content">
        <div className="dashboard-container-content-textBox"><span>设备管理</span></div>
        <div className="dashboard-container-content-textBox"><span>统计报表</span></div>
        <div className="dashboard-container-content-textBox"><span>报警管理</span></div>
        <div className="dashboard-container-content-textBox"><span>日志管理</span></div>
        <div className="dashboard-container-content-textBox"><span>服务管理</span></div>
        <div className="dashboard-container-content-textBox"><span>运维管理</span></div>
        <div className="error-box">
          <img src={require('../../assets/images/dashboard/warning.png')} alt="" />
          <p>设备报警信息实时推送区， 在当前访问页面的右下角自动弹出！</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
