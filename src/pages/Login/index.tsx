import React, {FC, useEffect} from 'react'
import {Typography, Space, Form, Input, Button, Checkbox, message} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import style from './index.module.scss'
import {Link, useNavigate} from 'react-router-dom'
import {useRequest} from 'ahooks'
import {userLogin} from '../../api/user'
import {setToken} from '../../utils/token'
import {ResDataType} from '../../services/ajax'

const {Title} = Typography
const USERNAME_KEY = 'username'
const PASSWORD_KEY = 'password'

//保存账号
const saveUserInfo = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}
//移除账号
const removeUserInfo = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}
//获取账号
const getUserInfo = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  }
}
const Login: FC = () => {
  const nav = useNavigate()
  //登录的ajax请求
  const {run: login} = useRequest(
    async (username: string, password: string) => {
      const data = await userLogin(username, password)
      return data
    },
    {
      manual: true,
      onSuccess: (res: ResDataType) => {
        const {token} = res
        setToken(token) //设置token
        nav('/manage/list') //跳转列表页
        message.success('登录成功')
      },
    }
  )

  const [form] = Form.useForm()
  useEffect(() => {
    //加载时获取账号
    const formData = getUserInfo()
    form.setFieldsValue(formData)
  }, [])

  //表单进行提交
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFinish = (values: any) => {
    const {username, password, remember} = values
    login(username, password) //发起ajax请求
    if (remember) {
      //记住我
      saveUserInfo(username, password)
    } else {
      //忘记我
      removeUserInfo()
    }
  }

  return (
    <div className={style.container}>
      <Space>
        <Title level={3}>
          <UserOutlined />
        </Title>
        <Title level={3}>用户登录</Title>
      </Space>
      <Form
        labelCol={{span: 6}}
        wrapperCol={{span: 16}}
        onFinish={handleFinish}
        initialValues={{remember: true}}
        form={form}
      >
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
          name="remember"
          valuePropName="checked"
          label={null}
          wrapperCol={{offset: 6, span: 16}}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 6, span: 16}}>
          <Space>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Link to="/register">注册新用户</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
