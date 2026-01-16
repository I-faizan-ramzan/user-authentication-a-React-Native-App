import * as SecureStore from "expo-secure-store";

// Save token
export async function saveToken(token) {
  await SecureStore.setItemAsync("token", token);
}

// Get token
export async function getToken() {
  return await SecureStore.getItemAsync("token");
}

// Remove token
export async function removeToken() {
  await SecureStore.deleteItemAsync("token");
}
