import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import { Select,Button,DatePicker } from 'antd';

import _ from 'lodash';
const { Option } = Select;
const history = createHashHistory();
const devicelog = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [startValue, setStartValue] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [endValue, setEndValue] = useState('');
  const handleChange = (value) => {
    console.log(value);
  };
  const detailsData = [
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
    { text: '2019-09-09 19:00:00宿舍楼201室的"位置收集设备,编号MZ00001"异常',id: 0,date: '2019-09-09',time: '17:54:30' },
  ];
  const disabledStartDate = startValue => {
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };
  const onStartChange = value => {
    setStartValue(value);
  };
  const handleStartOpenChange = open => {
    if (!open) {
      //   this.setState({ endOpen: true });
    }
  };
  return (
    <div className="devicelog-container">
      <div className="devicelog-container-top">
        <div className="devicelog-container-top-box">
          <p>今日统计</p>
          <div className="devicelog-container-top-box-textBox">
            <span>58</span>
          </div>
        </div>
        <div className="devicelog-container-top-box">
          <p>今日统计</p>
          <div className="devicelog-container-top-box-textBox">
            <span>58</span>
          </div>
        </div>
        <div className="devicelog-container-top-box">
          <p>今日统计</p>
          <div className="devicelog-container-top-box-textBox">
            <span>58</span>
          </div>
        </div>
      </div>
      <div className="devicelog-container-bottom">
        <div className="dev-search">
          <div className="dev-search-select">
            <span className="dev-search-select-title">报警开始时间</span>
            <DatePicker
              disabledDate={disabledStartDate}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              value={startValue}
              placeholder="Start"
              onChange={onStartChange}
              onOpenChange={handleStartOpenChange}
            />
          </div>
          <div className="dev-search-select">
            <span className="dev-search-select-title">报警结束时间</span>
            <input type="text" />
          </div>
          <Button type="link" className="search">搜索</Button>
        </div>
        <div className="details">
          <div className="details-box">
            {
              _.map(detailsData, item => (
                <div className="details-box-textBox">
                  <div className="textBox-right">
                    {item.text}
                  </div>
                  <div className="textBox-left">
                    <p>{item.date}</p>
                    <span>{item.time}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};


export default connect()(devicelog);
