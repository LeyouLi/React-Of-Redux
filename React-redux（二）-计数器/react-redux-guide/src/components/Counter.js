import React from 'react';
import { connect } from 'react-redux';
import * as couterActions from '../store/action/counter.action';
import { bindActionCreators } from 'redux';

function Counter(props) {
  console.log(props);
  const { count, increment, decrement } = props;
  return <>
    <div>
      <button onClick={() => increment(5)}>+</button>
      <span>{ count }</span> 
      <button onClick={() => decrement(5)}>-</button>
    </div>
  </>
}

/**
 * 1. connect 方法帮助订阅 store，当 store 中的状态改变时，会触发传入组件的重新渲染
 * 2. connect 方法获取 store 中的状态，并挂载到传入组件的 props 上
 * 3. connect 方法可以让传入组件获取 dispatch 方法
*/

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = dispatch => bindActionCreators(couterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);