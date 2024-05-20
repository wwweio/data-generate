import { configureStore } from '@reduxjs/toolkit'
// 引入主题换肤store分库
import themeReducer from '@/store/slices/theme'

// 一个store就代表一种全局配置
export const store = configureStore({
    reducer: {
      // 主题换肤store分库
      theme: themeReducer
      // 可以根据需要在这里继续追加其他分库
    },
  })