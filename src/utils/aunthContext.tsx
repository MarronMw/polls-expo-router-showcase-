import { SplashScreen, useRouter } from "expo-router";
import React, {
  useEffect,
  useState,
  createContext,
  PropsWithChildren,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
  isReady: boolean;
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthState>({
  isReady: false,
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
});
const authStorageKey = "auth-key";

export default function AuthProvider({ children }: PropsWithChildren) {
  SplashScreen.preventAutoHideAsync();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
    storeAuthState({ isLoggedIn: true });
    router.replace("/");
  };
  const logOut = () => {
    setIsLoggedIn(false);
    storeAuthState({ isLoggedIn: false });
    router.replace("/login");
  };

  //saving auth state to async storage
  const storeAuthState = async (newState: { isLoggedIn: boolean }) => {
    //TODO
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorageKey, jsonValue);
    } catch (error) {
      console.error("Error storing auth state:", error);
    }
  };

  useEffect(() => {
    const fetchAuthState = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(authStorageKey);
        if (jsonValue !== null) {
          const savedState = JSON.parse(jsonValue);
          setIsLoggedIn(savedState.isLoggedIn);
        }
      } catch (error) {
        console.error("Error fetching auth state:", error);
      }
      setIsReady(true);
    };
    //fetching auth state from async storage

    fetchAuthState();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isReady, isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
