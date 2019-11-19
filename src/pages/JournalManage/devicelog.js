import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import { Select,Button,DatePicker } from 'antd';
import _ from 'lodash';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { Option } = Select;
const history = createHashHistory();
const devicelog = () => {
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
  const handleStartOpenChange = (date, dateString) => {
    console.log(dateString);
  };

  const handleEndOpenChange = (date, dateString) => {
    console.log(dateString);
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
          <div className="dev-search-select">
            <span className="dev-search-select-title">日志类型</span>
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="dev-search-select">
            <span className="dev-search-select-title">报警开始时间</span>
            <DatePicker onChange={ handleStartOpenChange } locale={locale} />
          </div>
          <div className="dev-search-select">
            <span className="dev-search-select-title">报警结束时间</span>
            <DatePicker onChange={ handleEndOpenChange } locale={locale} />
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
