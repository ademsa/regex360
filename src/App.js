import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Learn from './components/Learn'
import Reference from './components/Reference'
import Experiment from './components/Experiment'
import Recipes from './components/Recipes'
import Resources from './components/Resources'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import './App.css'

export default function App() {
  React.useEffect(() => {
    document.title = "RegEx360";
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/404'>
            <Layout>
              <NotFound />
            </Layout>
          </Route>
          <Route exact path='/resources'>
            <Layout>
              <Resources />
            </Layout>
          </Route>
          <Route exact path='/recipes'>
            <Layout>
              <Recipes />
            </Layout>
          </Route>
          <Route exact path='/experiment'>
            <Layout>
              <Experiment />
            </Layout>
          </Route>
          <Route exact path='/reference'>
            <Layout>
              <Reference />
            </Layout>
          </Route>
          <Route exact path='/learn'>
            <Layout>
              <Learn />
            </Layout>
          </Route>
          <Route exact path='/home'>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route exact path='/'>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path='*'>
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
