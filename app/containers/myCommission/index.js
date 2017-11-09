import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myCommissionListActions  from './action';
import MyCommissionList from './components/myCommissionList/myCommissionList';


function moveStateToProps(state){
  return {
    fetching : state.myCommissionList.fetching,
    searchYear : state.myCommissionList.searchYear,
    listData : state.myCommissionList.data
  };
}

function matchDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(myCommissionListActions, dispatch)
  }
}

export default connect(moveStateToProps, matchDispatchToProps)(MyCommissionList);
