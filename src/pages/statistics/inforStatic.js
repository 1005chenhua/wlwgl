import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import { Select,Button,DatePicker } from 'antd';
import ArticeCencus from './articleInfo/graphCencus';

import _ from 'lodash';
const { Option } = Select;
const inforStatic = () => {
  return (
    <div className="inforStatic-container">
      <div className="inforStatic-container-left">
        <div className="inforStatic-container-left-bg" />
        <div className="inforStatic-container-left-textBox" >
          <div className="content">生命体征</div>
          <div className="content">运动康复</div>
          <div className="content">物品信息</div>
          <div className="content">戒毒医疗</div>
          <div className="content">环境信息</div>
          <div className="content">能耗检测</div>
        </div>
      </div>
      <div className="inforStatic-container-right">
        <ArticeCencus />
      </div>
    </div>
  );
};


export default connect()(inforStatic);
