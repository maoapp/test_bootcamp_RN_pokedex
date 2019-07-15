import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const Logo = () =>{
        
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle}
                source={require('../../assets/logoR.png')} />
        </View>
        
    );
}
export default Logo;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
    },
    imageStyle: {
        width: '62.55%',
        marginTop: '10%'
    },
    ball: {
        width: 100,
        height: 100
    }
})