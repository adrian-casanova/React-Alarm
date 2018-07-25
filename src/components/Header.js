import React from 'react';
import {Text, View} from 'react-native';


const Header = ({headerText}) => {
    const {ViewStyle, TextStyle} = styles;
    return(
        <View style = {ViewStyle}>
            <Text style = {TextStyle}>
                {headerText}
            </Text>
        </View>
    );
}

const styles = {
    ViewStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        height : 88,
        backgroundColor : '#283845'
        
    },

    TextStyle : {
        fontSize : 24,
        color : '#F2D492',
        marginTop : 45,
        fontWeight : 'bold'
    }
}

export default Header;