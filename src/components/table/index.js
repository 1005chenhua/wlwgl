import React from 'react';
import { Table } from 'antd';

export default () => {
  const dataSource = [
    {
      key: '1',
      type: 'Mike',
      kind: 32,
      numberNo: 1,
      address: '10 Downing Street',
      startTime: '2019-10-10',
      endTime: '2019-10-10',
      content: 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      key: '2',
      type: 'Mike',
      kind: 32,
      numberNo: 2,
      address: '10 Downing Street',
      startTime: '2019-10-10',
      endTime: '2019-10-10',
      content: 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      key: '3',
      type: 'Mike',
      kind: 32,
      numberNo: 3,
      address: '10 Downing Street',
      startTime: '2019-10-10',
      endTime: '2019-10-10',
      content: 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      key: '4',
      type: 'Mike',
      kind: 32,
      numberNo: 4,
      address: '10 Downing Street',
      startTime: '2019-10-10',
      endTime: '2019-10-10',
      content: 'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
  ];

  const columns = [
    {
      title: '报警资产类别',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '报警资产种类',
      dataIndex: 'kind',
      key: 'kind',
    },
    {
      title: '资产编号',
      dataIndex: 'numberNo',
      key: 'numberNo',
    },
    {
      title: '安装位置',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '发生时间',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '上报时间',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: '报警内容',
      dataIndex: 'content',
      key: 'content',
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  );
};
