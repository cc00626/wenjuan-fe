import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {Layout, Spin} from 'antd'
import Logo from '../../components/Logo'
import UserInfo from '../../components/UserInfo'
import style from './index.module.scss'
import userLoadUserInfo from '../../hooks/useLoadUsrInfo'
import {useNavPage} from '../../hooks/useNavpage'
const {Header, Footer, Content} = Layout
const MainLayout: FC = () => {
  const {wattingUserInfo} = userLoadUserInfo()
  useNavPage(wattingUserInfo)
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
          {wattingUserInfo ? (
            <div className={style.loading}>
              <Spin />
            </div>
          ) : (
            <Outlet />
          )}
        </Content>
      </div>
      <Footer className={style.footer}>MainFooter</Footer>
    </Layout>
  )
}
export default MainLayout
