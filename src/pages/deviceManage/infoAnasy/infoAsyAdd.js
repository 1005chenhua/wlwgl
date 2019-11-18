/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import { Table, Button, Select, Radio, Cascader,Input,LocaleProvider } from 'antd';
import { connect } from 'react-redux';
import Header from '@/components/header';
import _ from 'lodash';
import Item from 'antd/lib/list/Item';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const { Column } = Table;
const { Option } = Select;
const { TextArea } = Input;
const InfoAsyDetail = () => {
  const [val,setValue] = useState('1');
  const [textAreaLgn, setTextAreaLgn] = useState(0);
  const [mtop,setmtop] = useState('0');
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
      value: '1',
      label: '下拉选项1',
      children: [
        {
          value: '11',
          label: '子选项1'
        }
      ],
    },
    {
      value: '2',
      label: '下拉选项2',
      children: [
        {
          value: '22',
          label: '子选项1'
        }
      ],
    },
    {
      value: '3',
      label: '下拉选项3'
    }
  ];
  function handleAreaClick(e, label) {
    // e.stopPropagation();
    setTimeout(() => {
      setmtop(0);
    }, 200);
    console.log('clicked', label);
  }
  const TextAreaOnChange = (e) => {
    // this.setState({ value });
    console.log(e.target.value.length);
    setTextAreaLgn(e.target.value.length);
  };
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
                  <input type="text" placeholder="请输入系列号" />
                </div>
                <div className="typeName">
                  <span className="start">型 号</span>
                  <input type="text" placeholder="请输入型号" />
                </div>
                <div className="typeName">
                  <span className="start">规 格</span>
                  <input type="text" placeholder="请输入规格" />
                </div>
                <div className="typeName">
                  <span className="start">生产单位</span>
                  <input type="text" placeholder="请输入生产单位" />
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
                  <input type="text" placeholder="请输入供货单位" />
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
                  <input type="text" placeholder="请输入维护周期" />
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
                  <input type="text" placeholder="请输入使用年限" />
                </div>
                <div className="typeName">
                  <span className="start">使用负责人</span>
                  <input type="text" placeholder="请输入使用负责人" />
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
                <div className="test editor">
                  <TextArea
                    onChange={TextAreaOnChange}
                    placeholder="请输入备注"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                  <span className="total">{textAreaLgn}/500</span>
                </div>
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
                  locale={locale}
                  options={options}
                  // defaultValue={'请选择'}
                  placeholder="请选择"
                  // displayRender={displayRender}
                  style={{ width: '100%' }}
                  onChange={ handleAreaClick }
                  onClick={() => {
                    console.log(document.querySelectorAll('.ant-cascader-menu'));
                    setmtop(180);
                  }}
                />
              </div>
              <div className="other typeName" style={{ marginTop: mtop }}>
                <span className="start">详细位置</span>
                <input type="text" placeholder="请输入" style={{ paddingLeft: '10px' }} />
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
