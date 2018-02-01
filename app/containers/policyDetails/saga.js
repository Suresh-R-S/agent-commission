import { put, call } from 'redux-saga/effects';
import _ from 'lodash';
import { NavigationActions } from 'react-navigation';
import * as actionTypes from '../../constants/actionTypes';
import firebaseApp from '../../services/firebase';
import fetchListFromFirebase from '../../services/fetchListData';
import { deletePolicyItem } from './action';

export default function* deletePolicyItemSaga(deleteObj) {
    try {
        const commissionData = yield call(fetchListFromFirebase,`myCommission`,true);
        _.forOwn(commissionData, function(yearData, year) { 
            _.forOwn(yearData, function(monthData, month) { 
               const arrayData = JSON.parse(JSON.stringify(monthData));
               let filteredArrayData =  _.filter(arrayData, function(item) { 
                    return item.policy_no != deleteObj.payload.policyNo; 
                });
                updateFirebase(`myCommission/${year}/${month}`,JSON.parse(JSON.stringify(filteredArrayData)));
            } );
        } );
        yield call(removeFromFirebase,`myPolicyList/${deleteObj.payload.id}`);
        const listData = yield call(fetchListFromFirebase,'myPolicyList');
        yield put({ type: actionTypes.DELETE_POLICY_ITEM_SUCCESS, payload : listData||[]});
        yield put(NavigationActions.back());
    }
    catch(e){
      yield put({ type: actionTypes.DELETE_POLICY_ITEM_FAILURE});
    }
}

function removeFromFirebase(refPath) {
    firebaseApp.database().ref(refPath).remove();
}

function updateFirebase(refPath,data) {
    firebaseApp.database().ref(refPath).set(data);
}