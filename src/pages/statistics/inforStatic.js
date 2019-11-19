import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import { Select,Button,DatePicker } from 'antd';

import _ from 'lodash';
const { Option } = Select;
const inforStatic = () => {
  return (
    <div className="inforStatic-container">
      <div className="inforStatic-container-left">
        <div className="inforStatic-container-left-bg" />
        <div className="inforStatic-container-left-textBox" >
          <div className="content">生命体征</div>
          <div className="content">生命体征</div>
          <div className="content">生命体征</div>
          <div className="content">生命体征</div>
          <div className="content">生命体征</div>
        </div>
      </div>
      <div className="inforStatic-container-right">
        2
      </div>
    </div>
  );
};


export default connect()(inforStatic);
