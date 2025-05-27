import React, {FC} from 'react'
import {Tabs} from 'antd'
import type {TabsProps} from 'antd'
import ComponentLib from '../../../../components/ComponentLib'
import {AppstoreOutlined, LayoutOutlined} from '@ant-design/icons'
import ComponentLayer from '../../../../components/ComponentLayer'

const items: TabsProps['items'] = [
  {
    key: 'componentLib',
    label: (
      <span>
        <AppstoreOutlined />
        组件库
      </span>
    ),
    children: <ComponentLib />,
  },
  {
    key: 'layer',
    label: (
      <span>
        <LayoutOutlined />
        图层
      </span>
    ),
    children: <ComponentLayer />,
  },
]
const LeftPanel: FC = () => {
  return (
    <div>
      <Tabs defaultActiveKey="componentLib" items={items} />
    </div>
  )
}

export default LeftPanel
