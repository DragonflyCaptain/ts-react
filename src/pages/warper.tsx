import React from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

const Warper = (props: any) => (
    <Content>
        {props.children}
    </Content>
)

export default Warper