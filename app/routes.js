import React, { Component } from "react";
import { DrawerNavigator , StackNavigator, addNavigationHelpers } from "react-navigation";
import { connect } from 'react-redux';
import MyPolicies from "./containers/myPolicies";
import PolicyDetails from "./containers/policyDetails";
import AddPolicy from "./containers/addPolicy";
import MyCommission from "./containers/myCommission";
import CommissionDetails from "./containers/commissionDetails";
import SideMenu from "./components/sideMenu";

const PolicyList = StackNavigator(
  {
    MyPolicies: { screen: MyPolicies },
    PolicyDetails : { screen: PolicyDetails }
  }
);

const CommissionSection = StackNavigator(
  {
    MyCommission: { screen: MyCommission },
    CommissionDetails : { screen: CommissionDetails }
  }
);

export const Router = DrawerNavigator(
  {
    AddPolicy : { screen: AddPolicy },
    MyPolicies: { screen: PolicyList },
    MyCommission: { screen: CommissionSection },
  },
  {
    contentComponent: props => <SideMenu {...props} />
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <Router navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps,null)(AppWithNavigationState);
