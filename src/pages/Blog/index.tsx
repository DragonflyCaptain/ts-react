import React from 'react';
import BLOG_CONFIG from './config'
import './index.less'



function blogMap() {
    return BLOG_CONFIG.map((item, index) => (
        <div key={index} className="blog-item" >
            <div className="blog-img">
                <img src={item.picture} alt="" />
            </div>
            <div className="blog-content">
                <span>{item.title}</span>
                <div>{item.content}</div>
            </div>
        </div>
    ))
}

const Blog: React.FC = () => (
    <div className="blog-warper">
        <div className="blogList">
            {blogMap()}
        </div>
    </div>
)
export default Blog