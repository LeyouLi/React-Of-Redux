# React-Of-Redux

## 拉钩课程第四趴

### React 数据流方案之 Redux

### 介绍： javascript 状态容器，提供可预测化的状态管理

---

#### Redux 核心概念

- Store : 存储状态的容器，Javascript对象
- View : 视图，HTML页面
- Actions : 对象，描述对对象进行怎样的操作
- Reducers : 函数，操作状态并返回新的状态

#### Redux 核心 API

- 创建 Store 状态容器
`const store = Redux.createStore(reducer)`
- 创建用于处理状态的 reducer 函数
`function reducer(state = initialState, action) {}`
- 获取状态
`store.getState()`
- 订阅状态
`store.subscribe(() => {})`
- 触发 action
`store.dispatch({ type: 'actionName' })`

#### Redux 常用中间件

- redux-thunk
- redux-saga
- redux-action