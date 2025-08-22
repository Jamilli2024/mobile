import { Image, ImageSourcePropType, Text, View } from "react-native";


type Props = {
    url:ImageSourcePropType,
    nome:string,
    curso:string,
    faculdade:string,

}

export default function Profile({url,nome,curso,faculdade}:Props){
    return (
        <View>
            <Image style={{ 
                width: 200,
                height: 200
                }} source={url}/>
            <View>
                <Text>{nome}</Text>
                <Text>{curso}</Text>
                <Text>{faculdade}</Text>
            </View>
        </View>
    )
}