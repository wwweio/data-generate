import { useEffect, useState } from 'react';
import './home.styl';

function Home() {
    const [directories, setDirectories] = useState([]);

    useEffect(() => {
        fetch('/directories.json')
            .then(response => response.json())
            .then(data => setDirectories(data))
            .catch(error => console.error('Error fetching directories:', error));
    }, []);

    return (
        <div className="P-home">
            <h1>Practice Directories</h1>
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