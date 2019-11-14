import React from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import _ from 'lodash';
const history = createHashHistory();

const devData = [
  { text: '位置采集设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '生命体征采集设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '运动康复设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '物品信息采集设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '戒毒医疗设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '环境信息采集设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '资源消耗计量设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '智能交互终端',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '无线通讯设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '电平量开关量控制设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '监控摄像设备',total: '300',intactrate: '80%',alarm: '25条' },
  { text: '教育矫正设备',total: '300',intactrate: '80%',alarm: '25条' }
];
const totalData = [
  { number: '123456',text: '设备总数' },
  { number: '89%',text: '设备完好率' },
  { number: '254',text: '告警中心' },
];
const devManage = () => {
  return (
    <div className="devManage-container">
      <div className="devManage-container-left">
        {
          _.map(totalData, item => (<div className="dev-con-left-box">
            <div className="box-img">
              <span>{item.number}</span>
            </div>
            <div className="box-text">
              <span>{item.text}</span>
            </div>
          </div>))
        }
      </div>
      <div className="devManage-container-right">
        {
          _.map(devData, cId => (<div className="dev-con-right-box" onClick={() => {
            history.push('/InfoAnasy');
          }}>
            <h4>{cId.text}</h4>
            <p className="total">数量 <span>{cId.total}</span></p>
            <p className="text"><span>完好率 : {cId.intactrate}</span> <span>今日报警 : {cId.alarm}</span></p>
          </div>))
        }
      </div>
    </div>
  );
};


export default connect()(devManage);
