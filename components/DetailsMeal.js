import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'

const PlaceHolder = require('../images/placeholder_photo.jpg')
const TitleComment = require('../images/add_comment.png')
const IconCamera = require('../images/camera.png')
// const IconPhotoGallery = require('../images/gallery.png')
const IconInstagram = require('../images/instagram.png')

export default PhotoMeal = () => {

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.dateMeal}>Apr 21 - 12:02</Text>
            </View>

            <View style={styles.placehodler}>
                <TouchableOpacity onPress={() => null}>
                    <Image source={PlaceHolder} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.typeMeal}>BREAKFAST</Text>
            </View>

            <View>
                <Text style={styles.commentMeal}>Light dinner. :)</Text>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
    },

    placehodler: {
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: 'lightgray', 
        borderWidth: 1, 
    },
  
    dateMeal: {
      margin: 10,
      marginTop: 0,
      color: '#9493C5',
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
  
    typeMeal: {
      margin: 15,
      color: '#000',
      fontSize: 12,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
  
    commentMeal: {
        marginTop: 10,
        color: '#000',
        fontSize: 14,
        alignSelf: 'center',
    },

});
