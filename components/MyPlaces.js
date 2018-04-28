import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const MapBackground = require('../images/map_view.jpg')

export default MyPlaces = () => {

        return (
            <ImageBackground source={MapBackground} style={{flex: 1}}>
                <View style={styles.container} />
            </ImageBackground>
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
    },

    item: {
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
    },

    foto: {
        flex: 0.5,
        marginLeft: 20,
    },

    sizeFoto: {
        width: 72,
        height: 72,
    },

    wrapperInfoMeal: {
        marginTop: 20,
        marginLeft: 5,
        flex: 5, //para o texto ficar contido dentro do espaço da tela
        flexDirection: 'column',
    },
  
    dateMeal: {
      color: '#9493C5',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 60,
    },
  
    typeMeal: {
      color: '#000',
      fontSize: 12,
      marginLeft: 60,
    },

});
