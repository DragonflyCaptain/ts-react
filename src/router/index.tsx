import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { routerConfig } from './routerConfig'


const basicRouter = (props: any) => (
    <Router>
        <Switch>
            <Suspense fallback={<div>loading....</div>}>
                {
                    routerConfig.map(item => {
                        return (
                            <Route key={item.key} path={item.path} component={item.component} />
                        )
                    })
                }
            </Suspense>
        </Switch>
    </Router>
)
export default basicRouter