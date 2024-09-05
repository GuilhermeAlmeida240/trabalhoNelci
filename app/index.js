import { Text, View, Image, Pressable, StyleSheet, Animated } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  const animation = new Animated.Value(0);

  const handlePress = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A66038'
      }}
    >

      <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#0D0D0D', fontSize: 20 }}
      >
        As melhores receitas de Cookies 
      </Text>

      <Image
        style={{
          width: '15rem',
          height: '15rem',
          borderRadius: '10rem'
        }}
        source={require('../assets/images/Cookies/cookieNormal1.png')}
      />

      
      <Link href="/products" /**/ style={styles.button} asChild>
        <Pressable 
          onPress={handlePress}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressedButton,
          ]}
        >

          <Animated.Text
            style={[
              styles.buttonText,
              {
                transform: [
                  {
                    scale: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.9],
                    }),
                  },
                ],
              },
            ]}
          >
            Acessar Receitas
          </Animated.Text>

        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'relative',
    top: '8rem',
    bottom: 0,
    left: 0,
    right: 0,
    margin: '2rem',
    backgroundColor: '#261109',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '1rem',
    paddingHorizontal: '2rem',
    borderRadius: '2rem',

  },
  pressedButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 18,
    color: 'aliceblue',
    fontWeight: 'bold',
  },
});