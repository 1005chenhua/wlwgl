/* eslint-disable semi */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Divider } from 'antd';
import _ from 'lodash';
import { tsConstructorType } from '@babel/types';
const { Column, ColumnGroup } = Table;

export default ({ columns, handleControl = false }) => {
  // constructor(props){

  // }
  console.log(columns,handleControl,13);
  const data = [
    {
      key: '1',
      type: 'Mike4',
      kind: 32,
      numberNo: 1,
      address: '10 Downing Street',
      startTime: '2019-10-10',
      endTime: '2019-10-10',
      content: 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      key: '2',
      type: 'Mike3',
      kind: 32,
      numberNo: 2,
      address: '10 Downing Street',
      startTime: '2019-10-10',
      endTime: '2019-10-10',
      content: 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      key: '3',
      type: 'Mike2',
      kind: 32,
      numberNo: 3,
      address: '10 Downing Street',
      startTime: '2019-10-10',
      endTime: '2019-10-10',
      content: 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      key: '4',
      type: 'Mike1',
      kind: 32,
      numberNo: 4,
      address: '10 Downing Street',
      startTime: '2019-10-10',
      endTime: '2019-10-10',
      content: 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
  ];
  const deleteList = value => {
    console.log(value);
  };
  return (
    <Table columns={columns} dataSource={data} />
    // <Table dataSource={data} className="tableName" >
    //   {
    //     _.map(columns, item => (
    //       <Column title={item.title} dataIndex={item.dataIndex} key={item.key} />
    //     ))
    //   }
    //   { handleControl && <Column // handleControl为true显示column
    //     title="操作"
    //     key="action"
    //     render={(text, record) => (
    //       <span>
    //         <a>远程操控</a>
    //         <a>详情</a>
    //         <a>编辑</a>
    //         <a onClick={() => { deleteList(record) }}>删除</a>
    //       </span>
    //     )}
    //   />}
    // </Table>
  );
};
