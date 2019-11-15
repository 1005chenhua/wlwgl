import React, { useState } from 'react';
import { Progress,Button,Pagination,Select } from 'antd';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';

const history = createHashHistory();
const InfoAsyList = () => {
  const inforAnasyData = [
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 30 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 70 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 30 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 80 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 66 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 90 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 30 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 68 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 68 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 89 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 59 },
    { imgger: '',equipmenttype: '设备种类',equipmentname: '设备名称',equipment: 'MZ201911138001',online: '在线',address: '宿舍楼201',provalue: 98 },
  ];
  return (
    <div className="inforAnasy-container-bottom">
      {
        _.map(inforAnasyData, item => (<div className="inforAnasy-box" onClick={() => history.push('/InfoAsyDetail')} style={{ cursor: 'pointer' }}>
          <div className="inforAnasy-box-left">
            <div className="inforAnasy-box-left-text">
              <div className="textBgBox">1</div>
              <div className="textTextBox">
                <span>{item.equipmenttype}</span>
                <span>{item.equipmentname}</span>
                <span>{item.equipment}</span>
                <span>{item.online}</span>
                <span>{item.address}</span>
              </div>
            </div>
            <div className="inforAnasy-box-left-btn">
              <Button type="link">编辑</Button>
              <Button type="link">删除</Button>
              <Button type="link">远程操作</Button>
            </div>
          </div>
          <div className="inforAnasy-box-right">
            <Progress percent={item.provalue} size="small" showInfo={false} />
            <span>电量 {item.provalue}%</span>
          </div>
        </div>))
      }
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};
export default connect()(InfoAsyList);
