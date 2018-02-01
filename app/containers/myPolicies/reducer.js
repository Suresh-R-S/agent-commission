import * as actionTypes from '../../constants/actionTypes';

export default function(state={
	fetching:false,
	data:[],
	activeItem:{}
},action){
	switch(action.type){
		case actionTypes.MY_POLICY_LIST_START : {
			return {...state,fetching : true};
		}
		case actionTypes.MY_POLICY_LIST_SUCCESS : {
			return {...state,fetching : false,data:action.payload};
		}
		case actionTypes.MY_POLICY_LIST_FAILURE : {
			return {...state,fetching : false,data:[]};
		}
		case actionTypes.DELETE_POLICY_ITEM_START : {
			return {...state,fetching : true};
		}
		case actionTypes.DELETE_POLICY_ITEM_SUCCESS : {
			return {...state,fetching : false,data:action.payload};
		}
		case actionTypes.DELETE_POLICY_ITEM_FAILURE : {
			return {...state,fetching : false};
		}
		case actionTypes.MY_POLICY_LIST_ITEM_CLICKED : {
			return {...state,activeItem:action.payload};
		}
		default : return state;
	}
}
