import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
const MainLayout: FC = () => {
  return (
    <>
      <div>MainHeader</div>
      <div>
        <Outlet />
      </div>
      <div>MainFooter</div>
    </>
  )
}
export default MainLayout
