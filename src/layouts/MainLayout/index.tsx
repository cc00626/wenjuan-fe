import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {Layout} from 'antd'
import Logo from '../../components/Logo'
import UserInfo from '../../components/UserInfo'
import style from './index.module.scss'
const {Header, Footer, Content} = Layout
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={style.header}>
        <div className={style.left}>
          <Logo />
        </div>
        <div className={style.right}>
          <UserInfo />
        </div>
      </Header>
      <div>
        <Content className={style.container}>
          <Outlet />
        </Content>
      </div>
      <Footer className={style.footer}>MainFooter</Footer>
    </Layout>
  )
}
export default MainLayout
