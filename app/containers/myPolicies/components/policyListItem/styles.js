import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  listItemContainer : {
    flex : 1,
    height : 80,
    backgroundColor : colors.listItem,
    marginTop : 5,
    marginLeft : 10,
    marginRight : 10,
    padding : 10,
  },
  policyNo : {
    flex : 4,
    color : colors.white,
    fontSize : 12
  },
  policyDate : {
    flex : 1,
    color : colors.white,
    fontSize : 8
  },
  policyName : {
    color : colors.white,
    fontWeight : 'bold',
    fontSize : 18
  },
  sumText : {
    color : colors.white,
    fontSize : 14
  },
  termText : {
    marginLeft : 15,
    color : colors.white,
    fontSize : 14
  },
  rateContainer : {
    marginTop : 5,
    flexDirection : 'row'
  },
  noDateContainer : {
    flexDirection : 'row'
  }
});

export default styles;
