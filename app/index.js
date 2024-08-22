import { Text, View, Image, Pressable, StyleSheet, Animated } from "react-native";
import { Link } from 'expo-router';

export default function Index() {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A66038'
      }}
    >

      <Image
        style={{
          width: '20rem',
          height: '20rem',
          borderRadius: '20rem'
        }}
        source={require('../assets/images/cookieNormal1.png')}
      />

    </View>
  );
}

const styles = StyleSheet.create({


  
});