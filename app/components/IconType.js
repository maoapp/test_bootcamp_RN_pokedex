
import React from 'react';
import {
    Image, StyleSheet
} from "react-native"


export const IconType = () => {
        return (<Image style={styles.typeIcon} source={this.props.source}/>);
};

export default IconType;

const styles= StyleSheet.create({
    typeIcon: {
        width: 20,
        height: 20,
        padding: 7
    },
});