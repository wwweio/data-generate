import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/router'
//引入全局样式
import '@/common/styles/frame.styl'
//引入antd 中文包
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      {/* 增加路由配置 */}
      <RouterProvider router={globalRouters} />
    </ConfigProvider>
  </React.StrictMode>,
)
