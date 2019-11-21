/* eslint-disable semi */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Progress,Button,Pagination,Select,Icon, DatePicker } from 'antd';
import { RouteList, asyncRoutes } from '@/router';
import { createHashHistory } from 'history';
import Header from '@/components/header';
import Tables from '@/components/table';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const { Option } = Select;
const history = createHashHistory();
// eslint-disable-next-line complexity
export default ({ match }) => {
  // const [visible, setVisible] = useState(true);
  const handleChange = (value) => {
    console.log(value);
  };
  const handleStartOpenChange = (date, dateString) => {
    console.log(dateString);
  };
  const handleEndOpenChange = (date, dateString) => {
    console.log(dateString);
  };
  const columns = [
    {
      title: '戒毒人员姓名',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '心率(次/分钟)',
      dataIndex: 'kind',
      key: 'kind',
    },
    {
      title: '呼吸(次/分钟)',
      dataIndex: 'numberNo',
      key: 'numberNo',
    },
    {
      title: '体温(℃)',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '舒张压(mmHg)',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '收缩压(mmHg)',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: '离床(分钟)',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '多人同时离床',
      dataIndex: 'online',
      key: 'online',
    },
    {
      title: '上报时间',
      dataIndex: 'time',
      key: 'time',
    }
  ];
  return (
    <div className="layout-container">
      <Header />
      <div className="footer" style={{ paddingTop: '0' }}>
        <div className="tabInfo">
          <p>位置信息 : <span>统计报表 / 信息统计</span></p>
        </div>
        <div className="inforAnasy-container">
          <div className="inforAnasy-container-top">
            <div className="inforAnasy-container-top-btn">
              <Button type="link"><img src={require('../../../assets/images/add.png')} alt="" />导出EXCEL</Button>
              <span className="btnchange" onClick={() => {
                // setVisible(!visible);
              }}>
                <img src={require('../../../assets/images/change.png')} alt="" />
              </span>
            </div>
            <div className="inforAnasy-container-top-input dev-search">
              <div className="dev-search-select">
                <span className="dev-search-select-title">戒毒人员姓名</span>
                <input type="text" />
              </div>
              <div className="dev-search-select">
                <span className="dev-search-select-title">上报开始时间</span>
                <DatePicker onChange={ handleStartOpenChange } locale={locale} />
              </div>
              <div className="dev-search-select">
                <span className="dev-search-select-title">上报结束时间</span>
                <DatePicker onChange={ handleEndOpenChange } locale={locale} />
              </div>
              <Button type="link" className="search">搜索</Button>
            </div>
          </div>
          <div className="assetInfo">
            <div>资产编号：MB12345678900</div>
            <div>设备名称：智能床垫#201</div>
            <div>资产种类：智能床垫</div>
          </div>
          <Tables columns={columns} />
        </div>
      </div>
    </div>
  );
};
