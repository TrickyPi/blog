import React from 'react';
import './App.css';
import Left from './layout/Left'
import Right from './layout/Right'
import Welcome from './layout/Welcome'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component {
  state = {
    tabList: [
      {
        id: 1,
        icon: require('./assets/imgs/home.png'),
        text: '首页',
        showColor: true,
        route: '/home'
      },
      {
        id: 2,
        icon: require('./assets/imgs/all.png'),
        text: '归档',
        showColor: false,
        route: '/all'
      },
      {
        id: 3,
        icon: require('./assets/imgs/class.png'),
        text: '分类',
        showColor: false,
        route: '/class'
      },
      {
        id: 4,
        icon: require('./assets/imgs/search.png'),
        text: '标签',
        showColor: false,
        route: '/tag'
      },
      {
        id: 5,
        icon: require('./assets/imgs/place.png'),
        text: '广场',
        showColor: false,
        route: '/place'
      }
    ]
  }
  cstClick(id) {
    this.setState((state) => {
      return {
        tabList: state.tabList.map(item => {
          if (item.id === id) {
            item.showColor = true
          } else {
            item.showColor = false
          }
          return item
        })
      }
    })
  }
  render() {
    return (
      <Router>
        < div className="App" >
          <Route path='/' exact render={() => <Welcome></Welcome>}></Route>
          <Route path='/look'>
            <div style={{width:'100%',minHeight:"100vh",backgroundColor:'rgba(255,255,255,0.6)'}}>
              <Left tabList={this.state.tabList} cstClick={this.cstClick.bind(this)}></Left>
              <Route path='/look/home' render={() => (<Right></Right>)}></Route>
              <Route path='all' render={() => (<div>归档</div>)}></Route>
              <Route path='class' render={() => (<div>分类</div>)}></Route>
              <Route path='tag' render={() => (<div>标签</div>)}></Route>
              <Route path='place' render={() => (<div>广场</div>)}></Route>
            </div>
          </Route>
        </div >
      </Router>
    )
  }
}

export default App;
