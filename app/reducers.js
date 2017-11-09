import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import AddPolicyReducer from './containers/addPolicy/reducer';
import MyPolicyListReducer from './containers/myPolicies/reducer';
import MyCommissionListReducer from './containers/myCommission/reducer';

const reducers = {
  form: formReducer,
  addPolicy : AddPolicyReducer,
  myPolicyList : MyPolicyListReducer,
  myCommissionList : MyCommissionListReducer
}
const rootReducers= combineReducers(reducers);
export default rootReducers;
