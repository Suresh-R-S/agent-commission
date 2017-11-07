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
      <TouchableHighlight underlayColor="transparent" style={styles.listItemContainer} onPress={() => props.ItemPressed(props.Data)}>
        <View>
          <View style={styles.noDateContainer}>
          <Text style={styles.policyNo}>Policy No. {props.Data.policy_no}</Text>
          <Text style={styles.policyDate}>{moment(props.Data.date_of_joining).format('DD/MM/YYYY')}</Text>
          </View>
          <Text style={styles.policyName}>{props.Data.policy_holder}</Text>
          <View style={styles.rateContainer}>
            <Text style={styles.sumText}>Rs. {props.Data.sum_assured}</Text>
            <Text style={styles.termText}>{props.Data.insurance_term} Years</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
}

export default ListItem;
