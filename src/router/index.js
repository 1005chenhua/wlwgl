import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AuthRoute from './authRoute';

import LoginPage from '@/pages/loginPage';
import ServiceSelect from '@/pages/serviceSelect';
import InfoAnasy from '@/pages/deviceManage/infoAnasy/index'; // 设备管理/采集分析详情
import DeviceManage from '@/pages/deviceManage'; // 设备管理
import CallpoliceManage from '@/pages/callpoliceManage'; // 报警管理
import JournalManage from '@/pages/JournalManage'; // 日志管理
import Statistics from '@/pages/statistics'; // 日志管理
import Page404 from '@/pages/page404';
import InfoAsyDetail from '@/pages/deviceManage/infoAnasy/infoAsyDetails';
import InfoAsyAdd from '@/pages/deviceManage/infoAnasy/infoAsyAdd';
import SignDetail from '@/pages/statistics/vitalSigns/signDetail';

import {
  flatTree
} from '@/utils';

// layout下的子模块
import Home from '@/pages/home';
import Detail from '@/pages/detail';

// 动态路由
export const asyncRoutes = [{
  id: 0,
  title: '人员管理',
  children: [{
    id: 1,
    title: '戒毒人员管理',
    children: [{
      id: 3,
      title: '人员1',
      path: '/person/jdperson',
      component: Home
    }]
  }, {
    id: 2,
    title: '路由测试2',
    path: '/detail',
    component: Detail
  }]
}];

export default () => (
  <HashRouter>
    <Switch>
      <AuthRoute exact path="/login" authTo="/" component={LoginPage} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/DeviceManage" component={DeviceManage} />
      <Route exact path="/CallpoliceManage" component={CallpoliceManage} />
      <Route exact path="/JournalManage" component={JournalManage} />
      <Route exact path="/InfoAnasy" component={InfoAnasy} />
      <Route exact path="/InfoAsyDetail" component={InfoAsyDetail} />
      <Route exact path="/InfoAsyAdd" component={InfoAsyAdd} />
      <Route exact path="/Statistics" component={Statistics} />
      <Route exact path="/SignDetail" component={SignDetail} />
      <AuthRoute path="/jd" authTo="/login" component={DeviceManage} />
      <Redirect from="/" to="/Home" />
      <Route component={Page404} />
    </Switch>
  </HashRouter>
);

export const RouteList = ({
  match
}) => (
  <Switch>
    {
      flatTree(asyncRoutes).filter(item => item.component).map((item, index) => (
        <Route path={`${match.path + item.path}`} key={index} component={item.component} />
      ))
    }
    <Route exact path={match.path} render={() => <h3>首页</h3>} />
    <Route component={Page404} />
  </Switch>
);
