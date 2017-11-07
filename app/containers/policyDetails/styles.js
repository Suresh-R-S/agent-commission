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
    width : '100%',
    height : 30,
  },
  hideView : {
    height : 0,
    width : 0
  }
});

export default styles;
