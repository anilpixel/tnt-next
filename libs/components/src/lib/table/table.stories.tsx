import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Table, TableProps, Tag } from '../../';

export default {
  component: Table,
  title: 'Table',
  parameters: {
    backgrounds: {
      default: 'gary',
      values: [{ name: 'gary', value: '#f1f2f5' }],
    },
  },
} as Meta;

const Template: Story<
  TableProps<{
    key: string;
    name: string;
    age: number;
    address: string;
  }>
> = (args) => <Table {...args} />;

export const Empty = Template.bind({});

Empty.args = {
  columns: [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ],
};

export const Loading = Template.bind({});

Loading.args = {
  columns: [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ],
  loading: true,
};

export const Default = Template.bind({});

Default.args = {
  columns: [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      render: (cellData) => <Tag color="green">{cellData}</Tag>,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ],
  dataSource: [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ],
  pagination: {
    total: 50,
    position: 'bottom',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  },
  loading: false,
};
