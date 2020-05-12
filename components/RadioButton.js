import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
 
 
var radio_props = [
  {label: '  ', value: 0 },
  {label: '  ', value: 1 },
  {label: '  ', value: 2 },
  {label: '  ', value: 3 }
];
 
export default class Radio extends React.Component{
  render() {
    return (
        <View >
        <RadioForm
            radio_props={radio_props}
            formHorizontal={true}
            buttonColor={'#2196f3'}
            animation={true}
            buttonSize={10}
            buttonOuterSize={20}
            onPress={(value) => {this.setState({value:value})}}
            />
      </View>
    )
  }
}