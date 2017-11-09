import * as actionTypes from '../../constants/actionTypes';

export function fetchMyCommissionList(year){
  return {
    type : actionTypes.MY_COMMISSION_LIST_START,
    payload : year
  }
}

export function myCommissionlistClicked(data){
  return {
    type : actionTypes.MY_COMMISSION_LIST_ITEM_CLICKED,
    payload : data
  }
}

export function searchYearDataChanged(text){
  return {
    type : actionTypes.MY_COMMISSION_LIST_SEARCH_TEXT_CHANGED,
    payload : text
  }
}
