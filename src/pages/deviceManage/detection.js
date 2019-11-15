import React from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import { getGauge,getLine } from '@/utils/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

import ReactEcharts from 'echarts-for-react';

import _ from 'lodash';
const history = createHashHistory();
const detection = () => {
  return (
    <div className="detection-container">
      <div className="detection-container-left">
          1
      </div>
      <div className="detection-container-right">
        <div>
          <p className="title-box"><span />各设备占比图</p>
          <ReactEcharts option={getGauge()} />
        </div>
        <div>
          <p className="title-box"><span />近七日设备报警统计</p>
          <ReactEcharts option={getLine()} />
        </div>
      </div>
    </div>
  );
};


export default connect()(detection);
