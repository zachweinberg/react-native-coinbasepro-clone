import React from 'react';
import { Text, View } from 'react-native';

const AccountScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: 'white' }}>Account</Text>
    </View>
  );
};

export default AccountScreen;
