import React from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';

const history = createHashHistory();


const devManage = () => {
  return (
    <div className="devManage-container">
      <div className="devManage-container-left">
        <div className="dev-con-left-box">
          <div className="box-img">
            <span>123456</span>
          </div>
          <div className="box-text">
            <span>设备总数</span>
          </div>
        </div>
        <div className="dev-con-left-box">
          <div className="box-img">
            <span>123456</span>
          </div>
          <div className="box-text">
            <span>设备总数</span>
          </div>
        </div>
        <div className="dev-con-left-box">
          <div className="box-img">
            <span>123456</span>
          </div>
          <div className="box-text">
            <span>设备总数</span>
          </div>
        </div>
      </div>
      <div className="devManage-container-right">
        <div className="dev-con-right-box">
          <h4>位置采集设备</h4>
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
        <div className="dev-con-right-box">
            11
        </div>
      </div>
    </div>
  );
};


export default connect()(devManage);
