import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Box(props) {
  return (
    <View>
      <View style={styles.BoxChallegn}>
        { props.children }
      </View>
    </View>
  );
}

const width_ = '91%';
// const height_ = '20%';

const styles = StyleSheet.create({
    
  BoxChallegn: {
    width: width_,
    backgroundColor: '#fff',
    alignContent: 'center',
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: '#d9d9d9',
    borderRadius: 20,
    marginLeft:15,
    marginRight:10
  }
});