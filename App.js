import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import GeneratePassword from './screens/GeneratePassword';

export default function App() {
  return (
    <View>
      {/* <LoginScreen></LoginScreen> */}
      <GeneratePassword></GeneratePassword>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
