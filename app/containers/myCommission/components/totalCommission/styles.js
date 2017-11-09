import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  commissionRateContainer : {
    flex : 1,
    height : 60,
    backgroundColor : colors.listItemMain,
    marginTop : 10,
    marginLeft : 10,
    marginRight : 10,
    padding : 10,
  },
  totalCommissionText : {
    color : colors.white,
    fontSize : 12
  },
  totalCommissionRate : {
    color : colors.white,
    fontWeight : '500',
    fontSize : 18
  }
});

export default styles;
