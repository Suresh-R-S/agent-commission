import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myPolicyListActions  from './action';
import MyPolicyList from './components/myPolicyList/myPolicyList';


function moveStateToProps(state){
  return {
    fetching : state.myPolicyList.fetching,
    listData : state.myPolicyList.data
  };
}

function matchDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(myPolicyListActions, dispatch)
  }
}

export default connect(moveStateToProps, matchDispatchToProps)(MyPolicyList);
