import React, { useState } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import Header from '@/components/header';
import _ from 'lodash';
import Item from 'antd/lib/list/Item';

const { Column } = Table;
const InfoAsyDetail = () => {
  const data = [
    {
      id: 0,
      name: '资产种类:',
      value: '11111111111'
    },
    {
      id: 0,
      name: '设备名称:',
      value: '11111111111'
    },
    {
      id: 0,
      name: '资产种类:',
      value: '11111111111'
    },
    {
      id: 0,
      name: '名称:',
      value: '11111111111'
    },
    {
      id: 0,
      name: '资产种类:',
      value: '11111111111'
    },
    {
      id: 0,
      name: '设备名称:',
      value: '11111111111'
    }
  ];
  const column = [
    {
      dataIndex: 'name',
      key: 'name'
    },
    {
      dataIndex: 'value',
      key: 'value'
    },
  ];
  return (
    <div className="infoAsyDetail-container layout-container">
      <Header />
      <div className="footer" style={{ paddingTop: '0' }}>
        <div className="tabInfo">
          <p>位置信息 : <span>设备管理/信息采集设备/设备详情</span></p>
        </div>
        <div className="inforAnasy-container" style={{ paddingLeft: '21px', paddingRight: '23px', display: 'flex' }}>
          <div className="inforAnasy-container-left inforAnasy-container-comm">
            <p className="name">基本信息</p>
            <Table showHeader={false} dataSource={data}>
              {
                _.map(column,item => (
                  <Column dataIndex={item.dataIndex} key={item.id} />
                ))
              }
            </Table>
          </div>
          <div className="inforAnasy-container-center inforAnasy-container-comm">
            <p className="name">图片&备注</p>
            <div className="pictor">
              <div className="pictor-onload">
                <p>设备照片</p>
              </div>
              <img src={require('../../../assets/images/dashboard/dashboard-bg.png')} alt="" />
            </div>
            <div className="pictor">
              <div className="pictor-onload">
                <p>备注</p>
              </div>
              <div className="test">1. 识别速度：300公里/小时。★2. 识别方式：全向识别。★
3.支持5种工作频段：433MHz/2.4GHz/125KHz/13.56MHz/915MHz
4. 安全性：通信行为隐匿，防破解。5. 穿透性：穿透性强，可穿透
人体、墙体等物体。6. 电池续航：≥5个月，支持充电。7. 具备呼
叫报警功能。8. 外壳防护等级：IP55。★9. 阅读器与人员卡片距离
大于等于30米时，系统可正常工作。10. 卡片侧面及上部必须有与
外壳一体的挂耳，方便直接挂佩戴。
              </div>
            </div>
          </div>
          <div className="inforAnasy-container-right inforAnasy-container-comm">
            <p className="name">其他信息</p>
            <Table showHeader={false} dataSource={data}>
              {
                _.map(column,item => (
                  <Column dataIndex={item.dataIndex} key={item.id} />
                ))
              }
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(InfoAsyDetail);
