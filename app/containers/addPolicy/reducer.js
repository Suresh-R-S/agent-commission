import * as actionTypes from '../../constants/actionTypes';
import moment from 'moment';

export default function(state={
	fetching:false,
	singlePremium:false,
	premiumModeValue:0,
	selectedDate:moment.utc().valueOf(),
},action){
	switch(action.type){
		case actionTypes.CHANGE_SINGLE_PREMIUM_VALUE : {
			return {...state,singlePremium : action.payload};
		}
		case actionTypes.CHANGE_PREMIUM_MODE_VALUE : {
			return {...state,premiumModeValue : action.payload};
		}
		case actionTypes.CHANGE_POLICY_DATE : {
			return {...state,selectedDate : action.payload};
		}
		case actionTypes.SAVE_POLICY_FORM_START : {
			return {...state,fetching : true};
		}
		case actionTypes.SAVE_POLICY_FORM_SUCCESS : {
			return {...state,fetching : false};
		}
		case actionTypes.SAVE_POLICY_FORM_FAILURE : {
			return {...state,fetching : false};
		}
		default : return state;
	}
}
