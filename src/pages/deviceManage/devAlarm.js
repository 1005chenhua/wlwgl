/* eslint-disable indent */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Select, DatePicker, Table, Button } from 'antd';
import Tables from '@/components/table';
const { Option, OptGroup } = Select;

const DevAlarm = () => {
  const handleChange = (value) => {
    console.log(value);
  };

  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');

  const disabledStartDate = startValue => {
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };
  const onStartChange = value => {
    setStartValue(value);
  };
  const disabledEndDate = endValue => {
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  const onEndChange = value => {
    setStartValue(value);
  };

  const handleStartOpenChange = open => {
    if (!open) {
    //   this.setState({ endOpen: true });
    }
  };

  const handleEndOpenChange = open => {
    // this.setState({ endOpen: open });
  };
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
      <div className="devManage-container-right" style={{ paddingRight: 0 }}>
        <div className="dev-search">
          <div className="dev-search-select">
            <span className="dev-search-select-title">报警资产类别</span>
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="dev-search-select">
            <span className="dev-search-select-title">报警资产种类</span>
            <input type="text" />
          </div>
          <div className="dev-search-select">
            <span className="dev-search-select-title">报警资产编号</span>
            <input type="text" />
          </div>
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
					<Button type="link" className="search">搜索</Button>
        </div>
				<Tables />
      </div>
    </div>
  );
};
export default connect()(DevAlarm);
