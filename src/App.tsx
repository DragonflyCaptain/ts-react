import React, { Fragment, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import './App.less';

const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const Music = lazy(() => import('./pages/Music'))
const Movie = lazy(() => import('./pages/Movie'))
const Message = lazy(() => import('./pages/Message'))
const About = lazy(() => import('./pages/About'))
const Example = lazy(() => import('./pages/Example'))

const View = (props: any) => (
  <Fragment>
    <Menu />
    {props.children}
  </Fragment>
)

const App = () => (
  <Router>
    <Route path='/' component={View} />
    <Switch>
      <Suspense fallback={<div>loading....</div>}>
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/movie" component={Movie} />
        <Route path="/music" component={Music} />
        <Route path="/message" component={Message} />
        <Route path="/about" component={About} />
        <Route path="/example" component={Example} />
      </Suspense>
    </Switch>
  </Router>
)
export default App;
