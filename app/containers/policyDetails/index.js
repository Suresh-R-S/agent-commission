import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PolicyDetails from './policyDetails';
import * as policyDetailsAction  from './action';

function moveStateToProps(state){
  return {
    listItem : state.myPolicyList.activeItem,
    fetching : state.myPolicyList.fetching
  };
}

function matchDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(policyDetailsAction, dispatch)
  }
}

export default connect(moveStateToProps, matchDispatchToProps)(PolicyDetails);
