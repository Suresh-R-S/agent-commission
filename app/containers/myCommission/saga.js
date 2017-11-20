import { put, call } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';
import fetchListFromFirebase from '../../services/fetchListData';
import _ from 'lodash';

const monthArray = [
  {id : '01',name:'January'},
  {id : '02',name:'February'},
  {id : '03',name:'March'},
  {id : '04',name:'April'},
  {id : '05',name:'May'},
  {id : '06',name:'June'},
  {id : '07',name:'July'},
  {id : '08',name:'August'},
  {id : '09',name:'September'},
  {id : '10',name:'October'},
  {id : '11',name:'November'},
  {id : '12',name:'December'}
];

export default function* myCommissionListFunction(action) {
    try {
      const listData = yield call(fetchListFromFirebase,`myCommission/${action.payload}`,true);
      const modifiedData = yield call(modifyCommissionStructureToIncludeRate,JSON.parse(JSON.stringify(listData)));
      yield put({ type: actionTypes.MY_COMMISSION_LIST_SUCCESS, payload : modifiedData||{}});
    }
    catch(e){
      yield put({ type: actionTypes.MY_COMMISSION_LIST_FAILURE});
    }
}

function modifyCommissionStructureToIncludeRate(listData){
  let dataToReturn = [];
  let yearTotal = 0;
  _.each(monthArray,(monthItem) => {
    if(_.has(listData, monthItem.id)){
      dataToReturn.push({
        name : monthItem.name,
        monthCommission : calculateMonthCommission(JSON.parse(JSON.stringify(listData[monthItem.id]))),
        monthData : _.filter(listData[monthItem.id],function (value) {
                        return value!==null;
                    })
      });
    }
  });
  _.each(dataToReturn,(item) => {
    yearTotal += item.monthCommission;
  });
  return {
    yearTotal : yearTotal,
    yearData : JSON.parse(JSON.stringify(dataToReturn))
  };
}

function calculateMonthCommission(monthData){
  let total = 0;
  _.each(monthData,(item) => {
    if(item)
      total += item.rate;
  });
  return total;
}
