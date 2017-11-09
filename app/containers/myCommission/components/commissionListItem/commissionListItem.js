import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import moment from 'moment';

const ListItem = (props) => {

  return(
      <TouchableHighlight underlayColor="transparent" style={props.ItemPressed ? styles.commissionListItemContainer : styles.commissionDetailsItemContainer} onPress={() => props.ItemPressed && props.ItemPressed(props.Data)}>
        {props.ItemPressed ?
        <View>
          <Text style={styles.monthText}>{props.Data.name}</Text>
          <Text style={styles.totalCommissionRate}>Rs. {props.Data.monthCommission}</Text>
        </View> :
        <View>
          <Text style={styles.monthText}>Policy No. {props.Data.policy_no}</Text>
          <Text style={styles.monthText}>Policy Holder. {props.Data.policy_holder}</Text>
          <Text style={styles.totalCommissionRate}>Rs. {props.Data.rate}</Text>
        </View>
        }
      </TouchableHighlight>
    )
}

export default ListItem;
