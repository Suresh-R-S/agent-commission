import firebaseApp from './firebase';
import _ from 'lodash';

export default function fetchListFromFirebase(listName,returnInitialValue=false){
  return new Promise((resolve, reject) => {
    let list = firebaseApp.database().ref(listName);
    let listData = [];
    list.once('value', snapshot => {
      let listValues = snapshot.val();
      if(!returnInitialValue){
        listData = _(listValues).keys().map(listKey => {
          let cloned = _.clone(listValues[listKey]);
          cloned.id = listKey;
          return cloned;
        }).value();
      }
      return resolve(!returnInitialValue ? listData : listValues);
    }, err => {
      return reject(err);
    });
  });
}
