import React, { Component } from "react";
import MyPolicies from "./containers/myPolicies";
import PolicyDetails from "./containers/policyDetails";
import AddPolicy from "./containers/addPolicy";
import MyCommission from "./containers/myCommission";
import SideMenu from "./components/sideMenu";
import { DrawerNavigator , StackNavigator } from "react-navigation";

const PolicyList = StackNavigator(
  {
    MyPolicies: { screen: MyPolicies },
    PolicyDetails : { screen: PolicyDetails }
  }
);

const Router = DrawerNavigator(
  {
    AddPolicy : { screen: AddPolicy },
    MyPolicies: { screen: PolicyList },
    MyCommission: { screen: MyCommission },
  },
  {
    contentComponent: props => <SideMenu {...props} />
  }
);

export default Router;
