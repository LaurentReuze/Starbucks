// Librairies
import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../../constants/Colors';

function Logo(props) {
    return (
        <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Places', { fromLogo: true })}
        >
            <Text
                style={{
                    ...styles.title,
                    fontSize: props.dimensions.window.width * 0.055,
                }}
            >
                STARBUCKS
            </Text>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    title: {
        color: Colors.primary,
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Black',
    },
});

export default Logo;
