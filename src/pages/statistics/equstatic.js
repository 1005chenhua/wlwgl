import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import { Select,Button,DatePicker } from 'antd';
import ArticleTable from './vitalSigns/vitalSigTable';
import Tables from '@/components/table';

import _ from 'lodash';
const { Option } = Select;
const equStatic = () => {
  return (
    <div className="inforStatic-container">
      设备统计
    </div>
  );
};


export default connect()(equStatic);
