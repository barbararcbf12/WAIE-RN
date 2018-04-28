import React from 'react'
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase';

const LogoutIcon = require('../images/logout_small.png')

export default props => (
    <View style={styles.container}>
        <StatusBar style={styles.container} />
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>What Am I Eating</Text>
            <TouchableOpacity onPress={() => firebase.auth().signOut().then( () => Actions.home())} >
                <Image source={LogoutIcon}/>
            </TouchableOpacity>
        </View>
        <TabBar {...props} style={{ height:50 }} />
    </View>
)

const styles = StyleSheet.create({

    //TabBarMenu
    container:{
        backgroundColor: "#4593C5",
    },

    titleWrapper:{
        flexDirection: 'row',
        height: 50, 
        alignSelf: 'center',
        justifyContent: 'space-around', //space-between', 
        alignItems: 'center' ,
        paddingBottom: 5,

    },

    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold', 
        paddingRight: 20,
    },

    //TabBar
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
      },
    
})
