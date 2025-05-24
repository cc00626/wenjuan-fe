import React, {FC} from 'react'
import {Typography, Space, Form, Input, Button} from 'antd'
import {UserAddOutlined} from '@ant-design/icons'
import style from './index.module.scss'
import {Link, useNavigate} from 'react-router-dom'
import {userRegister} from '../../api/user'
import {useRequest} from 'ahooks'
const {Title} = Typography
const Register: FC = () => {
  const nav = useNavigate()
  const {run: register} = useRequest(
    async (username: string, password: string, nickname: string) => {
      const data = await userRegister(username, password, nickname)
      return data
    },
    {
      manual: true,
      onSuccess: () => {
        nav('/login') // 跳转
      },
    }
  )

  //表单进行提交
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFinish = (values: any) => {
    const {username, password, nickname} = values
    register(username, password, nickname) //发送ajax请求
    console.log(values)
  }
  return (
    <div className={style.container}>
      <Space>
        <Title level={3}>
          <UserAddOutlined />
        </Title>
        <Title level={3}>新用户注册</Title>
      </Space>
      <Form labelCol={{span: 6}} wrapperCol={{span: 16}} onFinish={handleFinish}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {required: true, message: '请输入用户名'},
            {type: 'string', min: 5, max: 20, message: '字符长度在5-20之间'},
            {pattern: /^\w+$/, message: '只能是数字,字母,下划线'},
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {required: true, message: '请输入密码'},
            {type: 'string', min: 5, max: 20, message: '字符长度在5-20之间'},
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="confirm"
          dependencies={['password']}
          rules={[
            {required: true, message: '请输入确认密码'},
            ({getFieldValue}) => ({
              validator(_, value) {
                if (value && value !== getFieldValue('password')) {
                  return Promise.reject(new Error('两次密码不一致'))
                }
                return Promise.resolve()
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="昵称" name="nickname">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 6, span: 16}}>
          <Space>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Link to="/login">已注册,登录</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Register
