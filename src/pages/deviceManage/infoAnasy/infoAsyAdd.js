/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import { Table, Button, Select, Radio, Cascader } from 'antd';
import { connect } from 'react-redux';
import Header from '@/components/header';
import _ from 'lodash';
import Item from 'antd/lib/list/Item';

const { Column } = Table;
const { Option } = Select;
const InfoAsyDetail = () => {
  const [val,setValue] = useState('1');
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
  const handleChange = value => {
    console.log(value);
  };
  const onChange = e => {
    setValue(e.target.value);
  };
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou'
        }
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing'
        }
      ],
    },
    {
      value: 'hahhahah',
      label: 'hahahahha'
    },
  ];
  function handleAreaClick(e, label, option) {
    e.stopPropagation();
    console.log('clicked', label, option);
  }
  const displayRender = (labels, selectedOptions) =>
    labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
          </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });
  return (
    <div className="infoAsyDetail-container layout-container">
      <Header />
      <div className="footer" style={{ paddingTop: '0' }}>
        <div className="tabInfo">
          <p>位置信息 : <span>设备管理/信息采集设备/设备详情</span></p>
        </div>
        <div className="inforAnasy-container" style={{ paddingLeft: '21px', paddingRight: '23px' }}>
          <div style={{ display: 'flex', height: '94%' }}>
            <div className="inforAnasy-container-left inforAnasy-container-comm inforAnasy-container-add">
              <p className="name">基本信息</p>
              <div className="baseInfo">
                <div className="typeName">
                  <span className="start"><i>*</i>资产种类</span>
                  <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <div className="typeName">
                  <span className="start"><i>*</i>设备名称</span>
                  <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <div className="typeName">
                  <span className="start"><i>*</i>品 牌</span>
                  <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <div className="typeName">
                  <span className="start"><i>*</i>序列号</span>
                  <input type="text" />
                </div>
                <div className="typeName">
                  <span className="start">型 号</span>
                  <input type="text" />
                </div>
                <div className="typeName">
                  <span className="start">规 格</span>
                  <input type="text" />
                </div>
                <div className="typeName">
                  <span className="start">生产单位</span>
                  <input type="text" />
                </div>
                <div className="typeName">
                  <span className="start">生产日期</span>
                  <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <div className="typeName">
                  <span className="start">供货单位</span>
                  <input type="text" />
                </div>
                <div className="typeName">
                  <span className="start">采购日期</span>
                  <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <div className="typeName">
                  <span className="start">维护周期</span>
                  <input type="text" />
                </div>
                <div className="typeName">
                  <span className="start">使用部门</span>
                  <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
                <div className="typeName">
                  <span className="start">使用年限</span>
                  <input type="text" />
                </div>
                <div className="typeName">
                  <span className="start">使用负责人</span>
                  <input type="text" />
                </div>
                <div className="typeName">
                  <span className="start">投入使用日期</span>
                  <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="inforAnasy-container-center inforAnasy-container-comm inforAnasy-container-add">
              <p className="name">图片&备注</p>
              <div className="pictor">
                <div className="pictor-onload">
                  <p>设备照片</p>
                </div>
                <div className="loaderImg">
                  <img src={require('../../../assets/images/devManager/onload.png')} alt="" />
                </div>
              </div>
              <div className="pictor">
                <div className="pictor-onload">
                  <p style={{ textIndent: '5px' }}>备注</p>
                </div>
                <div className="test editor">11</div>
              </div>
            </div>
            <div className="inforAnasy-container-right inforAnasy-container-comm inforAnasy-container-add">
              <p className="name">其他信息</p>
              <div className="other typeName">
                <div>
                  <span className="start"><i>*</i>固定位置安装</span>
                  <Radio.Group onChange={onChange} value={val}>
                    <Radio value={'1'}>是</Radio>
                    <Radio value={'2'}>否</Radio>
                  </Radio.Group>
                </div>
              </div>
              <div className="other typeName">
                <span className="start">安装位置</span>
                <Cascader
                  options={options}
                  defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                  displayRender={displayRender}
                  style={{ width: '100%' }}
                />
              </div>
              <div className="other typeName">
                <span className="start">详细位置</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="inforAnasy-container-operate">
            <Button type="link" className="sure">提交</Button>
            <Button type="link" className="cancel">取消</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(InfoAsyDetail);
