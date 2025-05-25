import React, {FC} from 'react'
import {Tabs} from 'antd'
import type {TabsProps} from 'antd'
import ComponentLib from '../../../../components/ComponentLib'
import {AppstoreOutlined, LayoutOutlined} from '@ant-design/icons'

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
    children: <div>图层</div>,
  },
]
const LeftPanel: FC = () => {
  return <Tabs defaultActiveKey="componentLib" items={items} />
}

export default LeftPanel
