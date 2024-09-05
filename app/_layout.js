import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#262626",
        },

        headerTintColor: "#F7E4C9",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "Comic Sans MS", // Adicionei essa linha
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "Cookies Mania" }} />
      <Stack.Screen name="paginas" options={{ title: "Receitas" }} />
      <Stack.Screen name="cookieSimgle/[id]" options={{ title: 'Cookiesss' }/**/} /> 
    </Stack>
  );
}

