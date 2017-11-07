import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actionTypes from '../../constants/actionTypes';
import firebaseApp from '../../services/firebase';
import { reset } from 'redux-form';
import moment from 'moment';
import _ from 'lodash';
import fetchListFromFirebase from '../../services/fetchListData';


export default function* savePolicyFormFunction(action) {
    try {
      yield call(addPolicyFormToFirebase,action.payload);
      yield put({ type: actionTypes.CREATE_CALCULATE_COMMISSION, payload : action.payload});
      yield put({ type: actionTypes.SAVE_POLICY_FORM_SUCCESS});
      yield put(reset('addPolicyForm'));
      Alert.alert('Add Policy','New policy added successfully',
  		[
  			{ text : 'OK'}
  		],
      { cancelable: false }
  		)
    }
    catch(e){
      yield put({ type: actionTypes.SAVE_POLICY_FORM_FAILURE});
    }
}

function addPolicyFormToFirebase(dataToSend){
  firebaseApp.database().ref('myPolicyList').push(dataToSend);
}

export function* calculateAndCreateCommission(action){
  let initialMonthFlag = false;
  var termMonthNotEnded = true;

  let startingYear = parseInt(moment(action.payload.date_of_joining).format('YYYY'));
  let endingYear = action.payload.single_premium ? startingYear + 1 : startingYear + parseInt(action.payload.insurance_term) + 1;

  let monthArray = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  let yearRange = _.range(startingYear, endingYear);
  let nextCommissionPush = moment(action.payload.date_of_joining).format('MM');


   _.each(yearRange,(yearItem) => {
    fetchListFromFirebase(`myCommission/${yearItem}`,true).then((yearData) => {
      const yearObj = _.clone(yearData);
      let firstYearCommission = (yearItem == startingYear) ? true : false;
      let secondThirdYearCommission = (yearItem == startingYear + 1 || yearItem == startingYear + 2) ? true : false;
      let restYearCommission = (yearItem > startingYear + 2) ? true : false;
      let agentCommission = 0;
      if(firstYearCommission){
        agentCommission =  action.payload.premium_amount * (action.payload.commission_1/100);
        let firstYearBonus = agentCommission * 0.4;
        agentCommission = agentCommission + firstYearBonus;
      }
      else if(secondThirdYearCommission){
        agentCommission =  action.payload.premium_amount * (action.payload.commission_2/100);
      }
      else if(restYearCommission){
        agentCommission =  action.payload.premium_amount * (action.payload.commission_rest/100);
      }
      _.each(monthArray,(monthItem) => {
        if(monthItem == moment(action.payload.date_of_joining).format('MM')){
          initialMonthFlag = true;
        }

        if(initialMonthFlag && termMonthNotEnded){
          let monthDataCopy = _.has(yearObj, monthItem) ? _.clone(yearObj[monthItem]) : [];
          if(monthItem == nextCommissionPush){
            let commissionPushObj = {
              policy_no : action.payload.policy_no,
              policy_holder : action.payload.policy_holder,
              rate : agentCommission
            }
            monthDataCopy.push(commissionPushObj);
            firebaseApp.database().ref(`myCommission/${yearItem}/${monthItem}`).set(monthDataCopy);
            nextCommissionPush = calculateNextCommissionPush(monthItem,action.payload.premium_mode);
          }
        }

        if((monthItem == moment(action.payload.date_of_joining).format('MM')) && (yearItem == endingYear-1) ){
          termMonthNotEnded = false;
        }

      });
    },(err) => {
      console.log("Error while fetching commission records",err);
    });
  });

}

function calculateNextCommissionPush(currentMonth,premiumMode){
  let premiumModeRef = {'Monthly' : 1,'Quarterly' : 3,'Half Yearly' : 6,'Yearly' : 12};
  let nextCommissionPush = parseInt(currentMonth) + premiumModeRef[premiumMode];
  if(nextCommissionPush > 12){
    nextCommissionPush = nextCommissionPush-12;
  }
  return nextCommissionPush;
}
