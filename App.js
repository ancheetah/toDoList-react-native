import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Input placeholder="Enter a task"
             rightIcon={ <Icon name='add-circle' size={26} color='gray' /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
