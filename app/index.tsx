import { Text, View } from "react-native";
import Profile from "./components/Profile";
import logo from '@/assets/images/jamilli.webp'
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Profile curso="Sistemas para Internet" faculdade="UNICAP" nome="Jamilli Silva" url={logo}/>
    </View>
  );
}


