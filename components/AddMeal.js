import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux'

const AddTitle = require('../images/add_meal.png')
const Breakfast = require('../images/icon_breakfast.png')
const Dinner = require('../images/icon_lunch.png')
const Snack = require('../images/icon_snack.png')
const Lunch = require('../images/icon_dinner.png')

export default AddMeal = () => {

    return (
        <View style={styles.container}>

            <View style={styles.titleWrapper}>
                <Image source={AddTitle}/>
            </View>

            <View style={styles.contentWrapper}>

                <View style={styles.menu} >
                    <View style={styles.menuGrupo}>
                        <View style={styles.iconGrupo}>
                            <TouchableOpacity onPress={() => Actions.photo()}>
                                <Image source={Breakfast} />
                            </TouchableOpacity>
                            <Text>BREAKFAST</Text> 
                        </View>
                        <View style={styles.iconGrupo}>
                            <TouchableOpacity onPress={() => Actions.photo()}>
                                <Image source={Lunch} />
                            </TouchableOpacity>
                            <Text>LUNCH</Text> 
                        </View>
                    </View>
                </View>

                <View style={styles.menu} >
                    <View style={styles.menuGrupo}>
                        <View style={styles.iconGrupo}>
                            <TouchableOpacity onPress={() => Actions.photo()}>
                                <Image source={Snack} />
                            </TouchableOpacity>
                            <Text>SNACK</Text> 
                        </View>
                        <View style={styles.iconGrupo}>
                            <TouchableOpacity onPress={() => Actions.photo()}>
                                <Image source={Dinner} />
                            </TouchableOpacity>
                            <Text>DINNER</Text> 
                        </View>
                    </View>
                </View>

            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleWrapper: {
        flex: 0.5,
        // marginTop: 80,
    },

    contentWrapper: {
        flex: 4,
    },

    menu: {
        alignItems: 'center',
        paddingBottom: 10,
    },

    menuGrupo: {
        flexDirection: 'row',
    },

    iconGrupo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },

});
