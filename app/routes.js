import React, { Component } from "react";
import MyPolicies from "./containers/myPolicies";
import PolicyDetails from "./containers/policyDetails";
import AddPolicy from "./containers/addPolicy";
import MyCommission from "./containers/myCommission";
import CommissionDetails from "./containers/commissionDetails";
import SideMenu from "./components/sideMenu";
import { DrawerNavigator , StackNavigator } from "react-navigation";

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

const Router = DrawerNavigator(
  {
    MyPolicies: { screen: PolicyList },
    MyCommission: { screen: CommissionSection },
    AddPolicy : { screen: AddPolicy },
  },
  {
    contentComponent: props => <SideMenu {...props} />
  }
);

export default Router;
