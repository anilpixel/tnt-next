import type { Meta, Story } from '@storybook/react'
import React from 'react'

import { Table, TableProps, Tag } from '../../'

const { Column, ColumnGroup } = Table

export default {
  component: Table,
  title: 'Table',
  parameters: {
    backgrounds: {
      default: 'gary',
      values: [{ name: 'gary', value: '#f1f2f5' }],
    },
  },
} as Meta

const Template: Story<
  TableProps<{
    key: string
    name: string
    age: number
    address: string
  }>
> = (args) => (
  <div
    style={{
      marginTop: '20px',
    }}
  >
    <Table {...args} />
  </div>
)

export const Empty = Template.bind({})

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
}

export const Loading = Template.bind({})

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
}

export const Default = Template.bind({})

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
}

export const ColumnFilter: Story<
  TableProps<{
    key: string
    age: number
    address: string
    firstName: string
    lastName: string
    tags: string[]
  }>
> = (args) => (
  <div
    style={{
      marginTop: '20px',
    }}
  >
    <Table {...args}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags) => (
          <span>
            {tags.map((tag: any) => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </span>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record: any) => (
          <span>
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </span>
        )}
      />
    </Table>
  </div>
)

ColumnFilter.args = {
  dataSource: [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
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
}
