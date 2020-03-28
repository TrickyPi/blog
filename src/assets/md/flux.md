## flux
*trickyPi* 2020-02-03

### flux简介

flux是一种数据流框架，更像一种架构思想；vuex就是以flux为基础来设计的；总的来说flux设计到四个要素“dispatcher”、“stores”、“views”、“actions”，flux中的数据是单向流动的

dispatcher：处理动作分发，维护 Store 之间的依赖关系

stores：数据和逻辑部分

views：作为视图同时响应用户交互

actions：提供给 dispatcher 传递数据给 store

### flux解析