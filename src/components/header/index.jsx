import { Button, Card, Menu } from 'antd'
import { useState } from 'react'
// 新增太阳图表
import { MoonOutlined, ThemeOutlined, SunOutlined } from '@/components/extraIcons'
import './header.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
// 引入redux
import { useSelector, useDispatch } from 'react-redux'
// 引入主题换肤功能
import { setDark } from '@/store/slices/theme'
import ThemeModal from '@/components/themeModal'
import { globalConfig } from '@/globalConfig'

function Header() {
    // 创建路由钩子
    const navigate = useNavigate();
    // 创建路由定位钩子
    const location = useLocation();

    // 定义菜单栏
    const menuItems = [
        {
            label: 'Home',
            key: '/home',
            icon: <HomeOutlined />,
            onClick: () => {
                navigate('/home')
            },
        },
        {
            label: 'Account',
            key: '/account',
            icon: <UserOutlined />,
            onClick: () => {
                navigate('/account')
            },
        },
    ]

    // 获取redux派发钩子
    const dispatch = useDispatch()

    // 获取store中的主题配置
    const theme = useSelector((state) => state.theme)

    // 是否显示主题颜色对话框
    const [showThemeModal, setShowThemeModal] = useState(false)

    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">wweio</div>
                <div className="menu-con">
                    <Menu mode="horizontal" selectedKeys={location.pathname} items={menuItems} />
                </div>
                <div className="opt-con">
                    {
                        theme.dark ? (
                            <Button
                                icon={<SunOutlined />}
                                shape='circle'
                                onClick={() => {
                                    dispatch(setDark(false))
                                }}
                            ></Button>
                        ) : (
                            <Button
                                icon={<MoonOutlined />}
                                shape='circle'
                                onClick={() => {
                                    dispatch(setDark(true))
                                }}
                            ></Button>
                        )
                    }
                    {
                          // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
                          globalConfig.customColorPrimarys &&
                              globalConfig.customColorPrimarys.length > 0 && (
                                  <Button
                                      icon={<ThemeOutlined />}
                                      shape="circle"
                                      onClick={() => {
                                          setShowThemeModal(true)
                                      }}
                                  ></Button>
                              )
                      }

                </div>
            </div>
            {
                // 显示主题颜色对话框
                showThemeModal && (
                    <ThemeModal 
                        onClose={() => {
                            setShowThemeModal(false)
                        }}
                    />
                )
            }
        </Card>
    )
}

export default Header;
