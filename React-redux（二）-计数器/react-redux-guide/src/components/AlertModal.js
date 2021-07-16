import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as alertModalActions from '../store/action/alertModal.action';

function AlertModal(props) {
  const { showState, show, hide } = props;
  const styles = {
    width: 200,
    height: 200,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -100,
    marginLeft: -100,
    background: 'skyblue',
    display: showState ? 'block' : 'none',
  };

  return <div>
    <button onClick={show}>显示</button>
    <button onClick={hide}>隐藏</button>
    <div style={styles}></div>
  </div>
}

const mapStateToProps = state => ({
  showState: state.show,
});

const mapDispatchToProps = dispatch => bindActionCreators(alertModalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlertModal);