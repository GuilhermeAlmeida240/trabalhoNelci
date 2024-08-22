import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#732C02",
      },

      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "Calibri",
        fontSize: '2rem', // Adicionei essa linha
      },
      headerTitleAlign: "center", // Centraliza o título na barra de navegação
    }}
  >
    {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
    <Stack.Screen name="index" options={{ title: "Cookies Mania" }} />
    <Stack.Screen name="products" options={{ title: "Menu WP" }} />
    <Stack.Screen name="coffeesingle/[id]" options={{ title: 'Coffee WP' }} />
  </Stack>
);
}