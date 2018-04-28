import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const MealIcon = require('../images/icon_breakfast.png')
const MealIcon2 = require('../images/icon_dinner.png')
const bgTimeLine = require('../images/bg_timeline.png')

export default MyMeals = () => {

        return (
            <View style={styles.container}>
                    <TouchableOpacity  style={styles.item} onPress={() => Actions.detailsmeal()}>
                        <View style={styles.foto}>
                            <ImageBackground source={bgTimeLine} style={{width: 40, height: 90}}>
                                <Image source={MealIcon}  style={ styles.sizeFoto } />
                            </ImageBackground>
                        </View>
                        <View style={styles.wrapperInfoMeal}>
                            <Text style={styles.dateMeal}>Apr 25 - 12:01</Text>
                            <Text style={styles.typeMeal}>BREAKFAST</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.item} onPress={() => Actions.detailsmeal()}>
                        <View style={styles.foto}>
                            <ImageBackground source={bgTimeLine} style={{width: 40, height: 90}}>
                                <Image source={MealIcon2}  style={ styles.sizeFoto } />
                            </ImageBackground>
                        </View>
                        <View style={styles.wrapperInfoMeal}>
                            <Text style={styles.dateMeal}>Apr 25 - 18:01</Text>
                            <Text style={styles.typeMeal}>DINNER</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
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
