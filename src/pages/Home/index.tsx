import React, { useState, useEffect } from 'react';
import './index.less'

const menu = [
    { title: 'Home', icon: 'home'},
    { title: 'Blog', icon: 'link'},
    { title: 'Music', icon: 'coffee'},
    { title: 'Message', icon: 'message'},
    { title: 'About', icon: 'smile'},
    { title: 'Example', icon: 'code'},
    { title: 'Github', icon: 'github'},
    { title: 'Email', icon: 'mail'},
    { title: 'Movie', icon: 'youtobe'},
]
const Home: React.FC = () => {
    const [flag, setFlag] = useState(false)
    useEffect(() => {
    }, [flag])

    function handleClick  (e: any)  {
        e.stopPropagation()
    }
    const mapMenuLsit = () => {
        return menu.map((item, index)=>{
            return(
                <li className="item" key={index} onClick={(e)=>handleClick(e)} >
                {item.title}
                </li>
            )
        })
    }
    return (<div>
        <div className="navigation-warper">
            <button className={flag ? 'toggle-btn active' : 'toggle-btn'} onClick={() => setFlag(true)}>
                <div className="toggle-body">
                    <div className="toggle-item item-one"></div>
                    <div className="toggle-item item-two"></div>
                    <div className="toggle-item item-three"></div>
                    <div className="toggle-item item-four"></div>
                    <div className="toggle-item item-five"></div>
                    <div className="toggle-item item-six"></div>
                    <div className="toggle-item item-seven"></div>
                    <div className="toggle-item item-eight"></div>
                    <div className="toggle-item item-nine"></div>
                </div>
            </button>
        </div>
        <div className="content-warper">
            <h1>TypeScript-Demo</h1>
            <p>酱油码农一条</p>
        </div>
        <footer className="footer">
            只要思想不滑坡，办法总比困难多!
        </footer>
        {
            flag ? (
                <div className="mask" onClick={() => setFlag(false)}>
                    <div className="menuList">
                        <ul className="menu">
                            {mapMenuLsit()}
                        </ul>
                    </div>
                </div>
            ) : (null)
        }
    </div>
    )
}
export default Home