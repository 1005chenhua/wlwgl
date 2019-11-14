import React from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import _ from 'lodash';
const history = createHashHistory();

const totalData = [
  { number: '123456',text: '设备总数' },
  { number: '89%',text: '设备完好率' },
  { number: '254',text: '告警中心' },
];
const detection = () => {
  return (
    <div className="detection-container">
      <div className="detection-container-left">
          1
      </div>
      <div className="detection-container-right">
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
};


export default connect()(detection);
