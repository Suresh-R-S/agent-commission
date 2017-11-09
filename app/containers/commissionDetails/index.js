import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommissionDetails from './commissionDetails';


function moveStateToProps(state){
  return {
    commissionDetails : state.myCommissionList.activeItem,
    searchYear : state.myCommissionList.searchYear,
  };
}

export default connect(moveStateToProps, null)(CommissionDetails);
