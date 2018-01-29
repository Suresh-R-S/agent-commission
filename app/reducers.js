import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import AddPolicyReducer from './containers/addPolicy/reducer';
import MyPolicyListReducer from './containers/myPolicies/reducer';
import MyCommissionListReducer from './containers/myCommission/reducer';

import {Router} from './routes';

const navReducer = (state, action) => {
    const newState = Router.router.getStateForAction(action, state);
    return newState || state;
};

const reducers = {
  nav : navReducer,
  form: formReducer,
  addPolicy : AddPolicyReducer,
  myPolicyList : MyPolicyListReducer,
  myCommissionList : MyCommissionListReducer
}
const rootReducers= combineReducers(reducers);
export default rootReducers;
