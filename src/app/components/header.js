import React, { Component } from 'react';
import { Text, View } from 'react-native'

const Header = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={ viewStyle }>
            <Text style={ textStyle }>Header here</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        height: 60,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;