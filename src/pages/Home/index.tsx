import React from 'react';
import './index.less'

const Home: React.FC = () => {
    return (
    <div className="home-warper">
        <div className="content-warper">
            <h1>TypeScript-Demo</h1>
            <p>酱油码农一条</p>
        </div>
        <footer className="footer">
            只要思想不滑坡，办法总比困难多!
        </footer>
    </div>
    )
}
export default Home