import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  formItem : {
    marginTop : 5,
    marginLeft : 20,
    marginRight : 20
  },
  commissionHeader : {
    marginTop : 10,
    height : 30,
    backgroundColor : colors.primaryColor,
    elevation : 3
  },
  commissionText : {
    color : colors.white,
    fontSize : 14,
    paddingTop : 5,
    paddingLeft : 20
  },
  premiumModePicker : {
    alignSelf : 'center',
    width : '90%',
    height : 60,
  },
  saveButton : {
    marginTop : 10,
    marginBottom : 10,
    alignSelf : 'center'
  },
  disabledSaveButton : {
    marginTop : 10,
    marginBottom : 10,
    alignSelf : 'center',
    opacity : 0.2
  },
  singlePremiumContainer : {
    flex : 1,
    flexDirection : 'row',
    width : '90%',
    marginTop : 25,
    marginLeft : 20,
    marginRight : 20,
    marginBottom : 10,
  },
  singlePremiumCheckboxLabel : {
    flex : 4
  },
  singlePremiumCheckbox : {
    flex : 1,
    right : 0
  },
  hideView : {
    height : 0,
    width : 0
  },
  errorText : {
    color : colors.red
  },
  errorText1 : {
    color : colors.red,
    fontSize : 10,
    marginLeft : 20,
  },
  datePickerContainer : {
    height : 60
  }
});

export default styles;
