import React from 'react';
import { View, StyleSheet, Platform, StyleProp, ViewStyle } from 'react-native';


type ScreenProps ={
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>,
};

function Screen({ children, style }: ScreenProps) {
    return (
       <View style={[styles.container,style]}>
        {children}
       </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }
});

export default Screen;