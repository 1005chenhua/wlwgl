import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Select } from 'antd';
import Tables from '@/components/table';
import { createHashHistory } from 'history';
const { Option } = Select;
const history = createHashHistory();
const articleTable = () => {
  const handleChange = (value) => {
    console.log(value);
  };
  const columns = [
    {
      title: '资产编号',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '设备名称',
      dataIndex: 'kind',
      key: 'kind',
    },
    {
      title: '资产种类',
      dataIndex: 'numberNo',
      key: 'numberNo',
    },
    {
      title: '业务信息上报次数',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '业务信息报警次数',
      dataIndex: 'startTime',
      key: 'startTime',
    }
  ];
  return (
    <div style={{ width: '100%' }}>
      <div className="inforAnasy-container-top" style={{ paddingLeft: '0' }}>
        <div className="inforAnasy-container-top-btn">
          <Button type="link" onClick={() => history.push('/SignDetail')}><img src={require('../../../assets/images/add.png')} alt="" />导出EXCEL</Button>
          <span className="btnchange">
            <img src={require('../../../assets/images/change.png')} alt="" />
          </span>
        </div>
        <div className="inforAnasy-container-top-input dev-search">
          <div className="dev-search-select">
            <span className="dev-search-select-title">资产编号</span>
            <input type="text" />
          </div>
          <div className="dev-search-select">
            <span className="dev-search-select-title">设备名称</span>
            <input type="text" />
          </div>
          <div className="dev-search-select">
            <span className="dev-search-select-title">资产种类</span>
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <Button type="link" className="search">搜索</Button>
        </div>
      </div>
      <Tables columns={columns} />
    </div>
  );
};
export default connect()(articleTable);
