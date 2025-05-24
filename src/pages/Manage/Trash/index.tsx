import React, {FC, useState} from 'react'
import {Table, TableProps, Tag, TableColumnsType, Space, Button} from 'antd'
import {useLoadQuestionList} from '../../../hooks/useLoadQuestionList'
interface DataType {
  _id: string
  title: string
  isPublish: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
}

//列
const columns: TableColumnsType<DataType> = [
  {title: '标题', dataIndex: 'title', key: 'title'},
  {
    title: '是否发布',
    dataIndex: 'isPublish',
    key: 'isPublish',
    render: (text: boolean) => {
      return text ? <Tag color="blue">已发布</Tag> : <Tag>未发布</Tag>
    },
  },
  {
    title: '答卷',
    dataIndex: 'answerCount',
    key: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
]

//行点击
const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`lectedRowKeys:se ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
}
const Trash: FC = () => {
  const {data = {}} = useLoadQuestionList({isDelete: true})
  const {list = []} = data
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox')
  return (
    <>
      <Space>
        <Button>恢复</Button>
        <Button>彻底删除</Button>
      </Space>
      <Table
        dataSource={list}
        columns={columns}
        rowKey={q => q._id}
        rowSelection={{type: selectionType, ...rowSelection}}
        pagination={false}
      />
    </>
  )
}
export default Trash
