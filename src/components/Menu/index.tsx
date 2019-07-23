import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'
import './index.less'

const menu = [
    { title: 'Home', icon: 'home' },
    { title: 'Blog', icon: 'link' },
    { title: 'Music', icon: 'coffee' },
    { title: 'Message', icon: 'message' },
    { title: 'About', icon: 'smile' },
    { title: 'Example', icon: 'code' },
    { title: 'Github', icon: 'github' },
    { title: 'Email', icon: 'mail' },
    { title: 'Movie', icon: 'youtobe' },
]

function Menu(props: any) {
    const [flag, setFlag] = useState(false)
    function handleClick(e: any, item: any, index: number) {
        e.stopPropagation()
        setFlag(false)
    }
    const mapMenuLsit = () => {
        return menu.map((item, index) => {
            return (
                <Link to={`/${item.title}`} key={index} >
                    <li className="item" key={index} onClick={(e) => handleClick(e, item, index)} >
                        {item.title}
                    </li>
                </Link>
            )
        })
    }
    return (
        <Fragment>
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
        </Fragment>
    )
}
export default Menu