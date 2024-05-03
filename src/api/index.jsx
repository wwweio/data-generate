import {globalRouters} from '@/router'

// 在非react组件中引入全局路由,封装goto函数
export const goto = (path) => {
    globalRouters.navigate(path)
}