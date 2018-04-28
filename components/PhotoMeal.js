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

            <View style={styles.placehodler}>
                <TouchableOpacity onPress={() => null}>
                    <Image source={PlaceHolder} />
                </TouchableOpacity>
            </View>

            <View>
                <Image source={TitleComment} />
            </View>

            <View>
                <TextInput 
                    style={styles.textInput} 
                    placehodler="e-mail" 
                    placeholderTextColor="#ccc" 
                    onChangeText={text => null } 
                />
            </View>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => null} 
                > 
                <Text style={styles.labelButton}>SAVE MEAL</Text>
            </TouchableOpacity>

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

    textInput: {
        fontSize: 20,
        height: 40,
        borderColor: 'lightgray', 
        borderWidth: 1, 
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        margin: 10,
        padding: 5,
    },

    button: {
      backgroundColor: '#9493C5', //#4593C5
      padding: 10,
      paddingTop: 12,
      width: 200,
      height: 45,
      borderRadius: 5,
      alignSelf: 'center',
      margin: 5,
      marginTop: 10,
    },
  
    labelButton: {
      color: '#FFFFFF',
      fontSize: 16,
      alignSelf: 'center',
    },

});
