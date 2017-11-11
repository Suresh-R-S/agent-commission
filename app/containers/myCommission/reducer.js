import * as actionTypes from '../../constants/actionTypes';
import moment from 'moment';

export default function(state={
	fetching:false,
	data:{},
	activeItem : {},
	searchYear: '2015'
},action){
	switch(action.type){
		case actionTypes.MY_COMMISSION_LIST_START : {
			return {...state,fetching : true,searchYear : action.payload};
		}
		case actionTypes.MY_COMMISSION_LIST_SUCCESS : {
			return {...state,fetching : false,data:action.payload};
		}
		case actionTypes.MY_COMMISSION_LIST_FAILURE : {
			return {...state,fetching : false,data:[]};
		}
		case actionTypes.MY_COMMISSION_LIST_ITEM_CLICKED : {
			return {...state,activeItem:action.payload};
		}
		case actionTypes.MY_COMMISSION_LIST_SEARCH_TEXT_CHANGED : {
			return {...state,searchYear:action.payload};
		}
		default : return state;
	}
}
