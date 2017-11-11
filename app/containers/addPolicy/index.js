import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as addPolicyActions  from './action';
import AddPolicy from './addPolicy';


function moveStateToProps(state){
  return {
    fetching : state.addPolicy.fetching,
    singlePremium : state.addPolicy.singlePremium,
    premiumModeValue : state.addPolicy.premiumModeValue,
    selectedDate  : state.addPolicy.selectedDate,
    confirmationModalOpen : state.addPolicy.confirmationModalOpen,
    currentFormValue : state.form.addPolicyForm
  };
}

function matchDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(addPolicyActions, dispatch)
  }
}

export default connect(moveStateToProps, matchDispatchToProps)(AddPolicy);
