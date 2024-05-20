import { Button, Card, Menu } from 'antd'
// 新增太阳图表
import { MoonOutlined, ThemeOutlined, SunOutlined } from '@/components/extraIcons'
import './header.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
// 引入redux
import { useSelector, useDispatch } from 'react-redux'
// 引入主题换肤功能
import { setDark } from '@/store/slices/theme'

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
                    <Button icon={<ThemeOutlined />} shape="circle"></Button>
                </div>
            </div>
        </Card>
    )
}

export default Header;
