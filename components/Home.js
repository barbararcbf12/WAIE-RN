import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {Actions } from 'react-native-router-flux'

const Logo = require('../images/logo_320px.png');
const LogIn = require('../images/login_icon.png');
const SignUp = require('../images/signup_icon.png');

export default props => (
    <View style = { styles.container } >
        <View style = { styles.containerLogo } >
            <View style={styles.logo}>
                <Image source={Logo} resizeMode="stretch"/>
            </View>
        </View>

        <View style={styles.menu} >
            <View style={styles.menuGrupo}>
                <View style={styles.iconGrupo}>
                    <TouchableOpacity onPress={() => Actions.login()}>
                        <Image
                            source={LogIn}
                            style={styles.imgGroup}
                        />
                    </TouchableOpacity>
                    <Text style={styles.labelButton}>LOG IN</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => Actions.signup()}>
                        <Image
                            source={SignUp}
                            style={styles.imgGroup}
                        />
                    </TouchableOpacity>
                    <Text style={styles.labelButton}>SIGN UP</Text>
                </View>
            </View>
        </View>
    </View>
)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'rgb(239,238,244)',
      backgroundColor: '#FFFFFF',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      flexDirection: 'column',
    },

    containerLogo: {
        flex: 1,
        marginTop: 80,
        marginLeft: 0,
        marginRight: 0,
    },
  
    logo: {
        flex: 1,
        alignSelf: 'center',
        width: undefined,
        height: undefined,
        // resizeMode: 'contain',
    },
  
    labelButton: {
      color: '#000000',
      fontSize: 16,
      alignSelf: 'center',
    },

    menu: {
        alignItems: 'center',
        paddingBottom: 40,
    },

    menuGrupo: {
        flexDirection: 'row',
    },

    imgGroup: {
        margin: 15,
    },

    iconGrupo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
  
  });