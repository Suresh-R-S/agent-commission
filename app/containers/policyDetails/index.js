import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PolicyDetails from './policyDetails';


function moveStateToProps(state){
  return {
    listItem : state.myPolicyList.activeItem
  };
}

export default connect(moveStateToProps, null)(PolicyDetails);
