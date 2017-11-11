import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  appNameContainer : {
    alignSelf : 'center',
    marginBottom : 20
  },
  appIconImageContainer : {
    alignSelf : 'center'
  },
  versionText : {
    textAlign : 'center',
    fontSize : 10
  },
  appIconImage : {
    height : 100,
    width : 100
  },
  appNameText : {
    color : colors.primaryColor,
    fontSize : 20,
    fontWeight : 'bold'
  },
  menuItemText : {
    color : colors.primaryColor,
    fontWeight : 'bold'
  }
});

export default styles;
