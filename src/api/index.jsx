import {globalRouters} from '@/router'
import axios from 'axios'
import { Modal } from 'antd'
import { globalConfig } from '@/globalConfig'

// 在非react组件中引入全局路由,封装goto函数
export const goto = (path) => {
    globalRouters.navigate(path)
}

// 1.环境配置以及域名管理
let API_DOMAIN = '/api/'
if (process.env.NODE_ENV === 'production') {
    API_DOMAIN = 'http://localhost:3000/api/'
}

// 2.API状态码与全局配置
// 用户登录信息在localStorage中存放的名称
export const SESSION_LOGIN_INFO = globalConfig.SESSION_LOGIN_INFO

export const API_CODE = {
    // API请求正常
    OK: 200,
    // API请求正常，数据异常
    ERR_DATA: 403,
    // API请求正常，空数据
    ERR_NO_DATA: 301,
    // API请求正常，登录异常
    ERR_LOGOUT: 401,
}

// API请求异常统一报错提示
export const API_FAILED = '网络连接异常，请稍后再试'
export const API_LOGOUT = '您的账号已在其他设备登录，请重新登录'

// 3.Api请求函数
export const apiReqs = {
    // 3.1 登录（登录成功后将登录信息存入localStorage）
    signIn: (config) => {
        axios.post(API_DOMAIN + 'login', config.data)
            .then((res) => {
                let result = res.data
                config.done && config.done(result)
                if (result.code === API_CODE.OK) {
                    window.localStorage.setItem(
                        SESSION_LOGIN_INFO,
                        JSON.stringify({
                            uid: result.data.loginUid,
                            nickname: result.data.nickname,
                            token: result.data.token,
                        })
                    )
                    config.success && config.success(result)
                } else {
                    config.fail && config.fail(result)
                }
            })
            .catch(() => {
                config.done && config.done()
                config.fail && config.fail({ message: API_FAILED })
                Modal.error({ title: '登录失败' })
            })
    },

    // 3.2 登出（登出后将登录信息从localStorage删除）
    signOut: () => {
        const { uid, token } = getLocalLoginInfo()
        let headers = { loginUid: uid, 'access-token': token }
        axios.post(API_DOMAIN + 'logout', {}, { headers })
            .then(() => {
                logout()
            })
            .catch(() => {
                logout()
            })
    },
    // 获取用户列表（仅做示例）
    getUserList: (config) => {
        config.method = 'get'
        config.url = API_DOMAIN + 'user/getUserList'
        apiRequest(config)
    },
    // 修改用户信息（仅做示例）
    modifyUser: (config) => {
        config.url = API_DOMAIN + 'user/modify'
        apiRequest(config)
    },
}


// 4.工具函数
// 4.1 获取登录信息
export function getLocalLoginInfo() {
    return JSON.parse(window.localStorage[SESSION_LOGIN_INFO])
}
// 4.2退出
export function logout() {
    // 清除localStorage中的登录信息
    window.localStorage.removeItem(SESSION_LOGIN_INFO)
    // 跳转到登录页
    goto('/login')
}

// 5.通用api请求封装
/*
 * API请求封装（带验证信息）
 * config.method: [必须]请求method
 * config.url: [必须]请求url
 * config.data: 请求数据
 * config.formData: 是否以formData格式提交（用于上传文件）
 * config.success(res): 请求成功回调
 * config.fail(err): 请求失败回调
 * config.done(): 请求结束回调
 */
export function apiRequest(config) {
    const loginInfo = JSON.parse(
        window.localStorage.getItem(SESSION_LOGIN_INFO)
    )
    if (config.data === undefined) {
        config.data = {}
    }
    config.method = config.method || 'post'

    // 封装header信息
    let headers = {
        loginUid: loginInfo ? loginInfo.uid : null,
        'access-token': loginInfo ? loginInfo.token : null,
    }

    let data = null

    // 判断是否使用formData方式提交
    if (config.formData) {
        headers['Content-Type'] = 'multipart/form-data'
        data = new FormData()
        Object.keys(config.data).forEach(function (key) {
            data.append(key, config.data[key])
        })
    } else {
        data = config.data
    }

    // 组装axios数据
    let axiosConfig = {
        method: config.method,
        url: config.url,
        headers,
    }

    // 判断是get还是post，并加入发送的数据
    if (config.method === 'get') {
        axiosConfig.params = data
    } else {
        axiosConfig.data = data
    }

    // 发起请求
    axios(axiosConfig)
        .then((res) => {
            let result = res.data
            config.done && config.done()

            if (result.code === API_CODE.ERR_LOGOUT) {
                // 如果是登录信息失效，则弹出Antd的Modal对话框
                Modal.error({
                    title: result.message,
                    // 点击OK按钮后，直接跳转至登录界面
                    onOk: () => {
                        logout()
                    },
                })
            } else {
                // 如果登录信息正常，则执行success的回调
                config.success && config.success(result)
            }
        })
        .catch((err) => {
            console.log(err);
            // 如果接口不通或出现错误，则弹出Antd的Modal对话框
            Modal.error({
                title: API_FAILED,
            })
            // 执行fail的回调
            config.fail && config.fail()
            // 执行done的回调
            config.done && config.done()
        })
}
