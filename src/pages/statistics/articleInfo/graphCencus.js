import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'antd';

import _ from 'lodash';
const inforStatic = () => {
  return (
    <div className="inforStatic-container-right">
      <div className="portrait-box">
        <img src={require('../../../assets/images/infostatic/portrait-bg.png')} alt="" />
      </div>
      <div className="textBox">
        <img src={require('../../../assets/images/infostatic/change-bg.png')} alt="" />
        <p>生命体征信息采集概览统计</p>
      </div>
      <div className="collection-box">
        <div className="collection-box-cencus">
          <Progress type="circle" width={120} strokeWidth={10.5} percent={50} />
          <Progress type="circle" width={200} strokeWidth={6} percent={50} />
          <Progress type="circle" width={285} strokeWidth={4} percent={45} />
          <Progress type="circle" width={379} strokeWidth={3} percent={50} />
        </div>
        <div className="collection-box-text">
          <div className="collection-box-text-textBox">
            <span>今日采集 </span>
            <span>1568条</span>
          </div>
          <div className="collection-box-text-textBox">
            <span>近一周采集 </span>
            <span>1568条</span>
          </div>
          <div className="collection-box-text-textBox">
            <span>近30天采集 </span>
            <span>1568条</span>
          </div>
          <div className="collection-box-text-textBox">
            <span>信息总数 </span>
            <span>1568条</span>
          </div>
        </div>
      </div>
      <div className="change-box">
        <img src={require('../../../assets/images/change.png')} alt="" />
      </div>
    </div>
  );
};


export default connect()(inforStatic);
