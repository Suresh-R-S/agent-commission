import React from "react";
import { View } from 'react-native';
import { Spinner , Text } from 'native-base';
import styles from './styles';

const Loader = (props) => {
  return (
    <View style={styles.container}>
    { props.Text ?
    <Text style={styles.noRecordsText}> {props.Text} </Text> :
    <Spinner color='blue' />
    }
    </View>
  )
}

export default Loader;
