import React from 'react';
import './App.css';
import LeftSlide from './layout/LeftSlide'
import Welcome from './layout/Welcome'
import Home from './layout/Home'
import Tech from './layout/Tech'
import Poetry from './layout/Poetry'
import Tag from './layout/Tag'
import TechCon from './layout/TechCon'
import Place from './layout/Place'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Router>
        < div className="App" >
          <Welcome></Welcome>
          <Route path='/look'>
            <div className="article-con">
              <LeftSlide></LeftSlide>
              <div className='right-st'>
                <Switch>
                  <Route path='/look/home'>
                    <Home></Home>
                  </Route>
                  <Route path='/look/techCon'>
                    <Switch>
                      <Route path='/look/techCon/tech/:id' component={Tech}>
                      </Route>
                      <Route path='' component={TechCon}>
                      </Route>
                    </Switch>
                  </Route>
                  <Route path='/look/poetry'>
                    <Poetry></Poetry>
                  </Route>
                  <Route path='/look/tag' >
                    <Tag></Tag>
                  </Route>
                  <Route path='/look/place'>
                    <Place></Place>
                  </Route>
                </Switch>
              </div>
            </div>
          </Route>
        </div >
      </Router>
    )
  }
}

export default App;