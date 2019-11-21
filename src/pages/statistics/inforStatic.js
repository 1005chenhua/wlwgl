/* eslint-disable default-case */
/* eslint-disable no-magic-numbers */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import { Select,Button,DatePicker } from 'antd';
import ArticeCencus from './vitalSigns/graphCencus'; // 生命体征
import ArticleInfo from './articleInfo/graphCencus'; // 物品信息

import _ from 'lodash';
const { Option } = Select;
const inforStatic = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(0);
  const contentList = [
    { name: '生命体征',id: 0 },
    { name: '运动康复',id: 1 },
    { name: '物品信息',id: 2 },
    { name: '戒毒医疗',id: 3 },
    { name: '环境信息',id: 4 },
    { name: '能耗检测',id: 5 },
  ];
  return (
    <div className="inforStatic-container">
      <div className="inforStatic-container-left">
        <div className="inforStatic-container-left-bg" />
        <div className="inforStatic-container-left-textBox" >
          {
            _.map(contentList, item => (
              <div className="content" key={item.id} onClick={() => {
                setVisible(item.id);
              }}>{item.name}</div>
            ))
          }
        </div>
      </div>
      <div className="inforStatic-container-right">
        { (() => {
          switch (visible) {
            case 0:
              return <ArticeCencus />;
            case 1:
              return <ArticleInfo />;
          }
        })()
        }
        {/* <ArticeCencus /> */}
      </div>
    </div>
  );
};


export default connect()(inforStatic);
