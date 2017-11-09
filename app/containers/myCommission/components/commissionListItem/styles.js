import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const listItemContainer = {
  flex : 1,
  backgroundColor : colors.listItem,
  marginTop : 5,
  marginLeft : 10,
  marginRight : 10,
  padding : 10,
}

const styles = StyleSheet.create({
  commissionListItemContainer : {
    ...listItemContainer,
    height : 60,
  },
  commissionDetailsItemContainer : {
    ...listItemContainer,
    height : 80,
  },
  monthText : {
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
