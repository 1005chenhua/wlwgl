/* eslint-disable semi */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Progress,Button,Pagination,Select,Icon } from 'antd';
import { RouteList, asyncRoutes } from '@/router';
import { createHashHistory } from 'history';
import Header from '@/components/header';
import InfoAsyList from './infoAsyList';
import InfoAsyTable from './infoAsyTable';
import Tables from '@/components/table';

const { Option } = Select;
const history = createHashHistory();
// eslint-disable-next-line complexity
export default ({ match }) => {
  const [visible, setVisible] = useState(true);
  const handleChange = (value) => {
    console.log(value);
  };
  const editorInfo = (record) => {
    console.log('编辑',record);
  };
  const columns = [
    {
      title: '设备编码',
      dataIndex: 'type',
      key: 'type',
      render: (text,record) => <a onClick={() => { console.log(record) }}>{text}</a>,
    },
    {
      title: '设备名称',
      dataIndex: 'kind',
      key: 'kind',
    },
    {
      title: '资产子类',
      dataIndex: 'numberNo',
      key: 'numberNo',
    },
    {
      title: '安装位置',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '品牌',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '序列号',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: '设备状态',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '在线状态',
      dataIndex: 'online',
      key: 'online',
    },
    {
      title: '操作',
      dataIndex: 'caozuo',
      key: 'caozuo',
      render: (text, record) => ( // 塞入内容
        <span>
          <a className="edit-data" style={{ cursor: 'pointer' }} onClick={() => {}}>远程操控</a>
          <a className="edit-data" style={{ cursor: 'pointer' }} onClick={() => { console.log('删除') }}>删除</a>
          <a className="edit-data" onClick={() => editorInfo(record)}>编辑</a>
          {/* <a className="delete-data" onClick={this.deletSource.bind(this,text)}>删除</a> */}
          {/* <Link className="topo-data" to={{ pathname: '/a',query: { id: text.id } }}>数据拓扑</Link> */}
        </span>
      ),
    }
  ];
  return (
    <div className="layout-container">
      <Header />
      <div className="footer" style={{ paddingTop: '0' }}>
        <div className="tabInfo">
          <p>位置信息 : <span>设备管理/信息采集设备</span></p>
        </div>
        <div className="inforAnasy-container">
          <div className="inforAnasy-container-top">
            <div className="inforAnasy-container-top-btn">
              <Button type="link" onClick={() => history.push('/InfoAsyAdd')} >
                <img src={require('../../../assets/images/add.png')} alt="" />
                添加设备
              </Button>
              <Button type="link"><img src={require('../../../assets/images/import.png')} alt="" />批量导入</Button>
              <Button type="link"><img src={require('../../../assets/images/download.png')} alt="" />下载模板</Button>
              <Button type="link"><img src={require('../../../assets/images/add.png')} alt="" />导出EXCEL</Button>
              <Button type="link"><img src={require('../../../assets/images/importcode.png')} alt="" />导出二维码</Button>
              <span className="btnchange" onClick={() => {
                setVisible(!visible);
              }}>
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
              <div className="dev-search-select">
                <span className="dev-search-select-title">设备状态</span>
                <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <Button type="link" className="search">搜索</Button>
            </div>
          </div>
          {
            visible ? (<InfoAsyList />) : (<Tables columns={columns} handleControl />)
          }
        </div>
      </div>
    </div>
  );
};
