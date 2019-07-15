import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export const  HeaderLogo = () =>{
        
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle}
                source={require('../../assets/logoB.png')} />
                
        </View>
        
    );
}

export default HeaderLogo;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    imageStyle: {
        width: 115,
        height: 40
    }
})