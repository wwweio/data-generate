import { Button, Card, Menu } from 'antd'
import { MoonOutlined, ThemeOutlined } from '@/components/extraIcons'
import './header.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'

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

    return (
        <Card className="M-header">
            <div className="header-wrapper">
                <div className="logo-con">wweio</div>
                <div className="menu-con">
                    <Menu mode="horizontal" selectedKeys={location.pathname} items={menuItems} />
                </div>
                <div className="opt-con">
                    <Button icon={<MoonOutlined />} shape="circle"></Button>
                    <Button icon={<ThemeOutlined />} shape="circle"></Button>
                </div>
            </div>
        </Card>
    )
}

export default Header;
