import React, { useState } from 'react';
import { connect } from 'react-redux';
import VitalSigTable from '../vitalSigns/vitalSigTable';
import _ from 'lodash';
const inforStatic = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHidden, setHidden] = useState(true);
  return isHidden ? (
    <div className="inforStatic-container-right">
      <div className="portrait-box">
        <img src={require('../../../assets/images/infostatic/portrait-bg.png')} alt="" />
      </div>
      <div className="textBox">
        <img src={require('../../../assets/images/infostatic/change-bg.png')} alt="" />
        <p>生命体征信息采集概览统计</p>
      </div>
      <div className="collection-box">
        <div className="collection-box-cencus">1</div>
        <div className="collection-box-text">1</div>
      </div>
      <div className="change-box" onClick={() => setHidden(false)}>
        <img src={require('../../../assets/images/change.png')} alt="" />
      </div>
    </div>
  ) : (<VitalSigTable />);

};


export default connect()(inforStatic);
