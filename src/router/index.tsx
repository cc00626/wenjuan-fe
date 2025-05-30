import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ManageLayout from '../layouts/ManageLayout'
import List from '../pages/Manage/List'
import Trash from '../pages/Manage/Trash'
import Star from '../pages/Manage/Star'
import QuestionLayout from '../layouts/QuestionLayout'
import Edit from '../pages/Question/Edit'
import Stat from '../pages/Question/Stat'
import NotFound from '../pages/NotFound'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/manage',
        element: <ManageLayout />,
        children: [
          {
            path: '/manage/list',
            element: <List />,
          },
          {
            path: '/manage/star',
            element: <Star />,
          },
          {
            path: '/manage/trash',
            element: <Trash />,
          },
        ],
      },
    ],
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: '/question/edit/:id',
        element: <Edit />,
      },
      {
        path: '/question/stat/:id',
        element: <Stat />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
export default router

//是否在登录或注册页面
export const isLoginOrRegister = (pathname: string) => {
  if (['/login', '/register'].includes(pathname)) {
    //表示在登录或注册页面
    return true
  } else {
    return false
  }
}

//判断是否需要用户信息

export const isNeedUserInfo = (pathname: string) => {
  if (['/', '/login', '/register'].includes(pathname)) {
    return true
  } else {
    return false
  }
}
