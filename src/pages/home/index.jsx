import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
// import './home.styl';
import { Button } from 'antd';
import { goto } from '@/api';
import './home.css';

function Home() {
    //创建路由钩子
    const navigate = useNavigate();
    const [directories, setDirectories] = useState([]);

    useEffect(() => {
        fetch('/directories.json')
            .then(response => response.json())
            .then(data => setDirectories(data))
            .catch(error => console.error('Error fetching directories:', error));
    }, []);

    return (
        <div className="P-home">
            <h3>Practice Directories</h3>
            <div className="ipt-con">
                    <Button onClick={()=>{goto('/login')}}>组件外跳转</Button>
            </div>
            <div className="ipt-con">
                <Button type="primary" onClick={()=>{navigate('/login')}}>返回登录</Button>
            </div>
            <ul className='ipt-con'>
                {directories.map((dir, index) => (
                    <li key={index}>
                        <a href={`/practice/${dir}/index.html`} target="_blank" rel="noopener noreferrer">
                            {dir}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;