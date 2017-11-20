import React from "react";
import { View , Text } from 'react-native';
import styles from './styles';

const TotalCommission = (props) => {
  return (
    <View style={styles.commissionRateContainer}>
        <Text style={styles.totalCommissionText}>Total Commission</Text>
        <Text style={styles.totalCommissionRate}>Rs. {props.Rate.toFixed(2)}</Text>
    </View>
  )
}

export default TotalCommission;
