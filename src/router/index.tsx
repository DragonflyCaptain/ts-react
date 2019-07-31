import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { routerConfig } from './routerConfig'


const childrenPage = (props: any) => (
    console.log(props)
)
export default childrenPage