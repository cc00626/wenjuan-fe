import React, {FC} from 'react'
import ComponentProp from '../../../../components/ComponentProp'
import {Tabs, TabsProps} from 'antd'
import {FileTextOutlined, SettingOutlined} from '@ant-design/icons'
const items: TabsProps['items'] = [
  {
    key: 'componentProp',
    label: (
      <span>
        <FileTextOutlined />
        组件库
      </span>
    ),
    children: <ComponentProp />,
  },
  {
    key: 'layer',
    label: (
      <span>
        <SettingOutlined />
        页面设置
      </span>
    ),
    children: <div>页面设置</div>,
  },
]
const RightPanel: FC = () => {
  return <Tabs defaultActiveKey="componentProp" items={items} />
}
export default RightPanel
