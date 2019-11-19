/* eslint-disable react/self-closing-comp */
import React from 'react';

export default () => {
  return (
    <div className="error-box" >
      <img src={require('@/assets/images/dashboard/warning.png')} alt="" />
      <p>设备报警信息实时推送区， 在当前访问页面的右下角自动弹出！</p>
      <span className="handel" />
    </div>
  );
};

