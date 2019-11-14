import React from 'react';
import { Layout, Menu } from 'antd';
import { RouteList, asyncRoutes } from '@/router';
import { createHashHistory } from 'history';
import Header from '@/components/header';

const { SubMenu } = Menu;
const history = createHashHistory();

const recursion = (dataSource, match) => {
  return (
    dataSource.map(menu => {
      if (menu.children) {
        return (
          <SubMenu key={menu.id} title={menu.title}>
            {recursion(menu.children, match)}
          </SubMenu>
        );
      }
      return (<Menu.Item key={menu.id} onClick={e => history.push(`${match.url + menu.path}`)}>{menu.title}</Menu.Item>);
    })
  );
};
export default ({ match }) => (
  <div className="layout-container">
    <Header />
    <div>
      <RouteList match={ match } />
    </div>
  </div>
);
