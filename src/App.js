import React from 'react';
import './App.css';
import LeftSlide from './layout/LeftSlide'
import Welcome from './layout/Welcome'
import Home from './layout/Home'
import Tech from './layout/Tech'
import Poetry from './layout/Poetry'
import Tag from './layout/Tag'
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
              <div style={rightStyle}>
                <Switch>
                  <Route path='/look/home'>
                    <Home></Home>
                  </Route>
                  <Route path='/look/tech'>
                    <Tech></Tech>
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

const rightStyle = {
  position:"relative",
  boxSizing: 'border-box',
  width: '750px',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  margin: '0 0 0 220px',
  textAlign: 'left',
  padding: '0px 0px 30px 0px',
}