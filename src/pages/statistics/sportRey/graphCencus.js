/* eslint-disable semi */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { createHashHistory } from 'history';

const history = createHashHistory();
// eslint-disable-next-line complexity
export default ({ match }) => {
  return (
    <div className="inforStatic-container-right sport-container">
      <div className="sport-container-top">
        <i>运动康复信息概览统计</i>
      </div>
    </div>
  );
};
