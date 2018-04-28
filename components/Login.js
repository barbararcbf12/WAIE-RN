import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { modifyEmail, modifyPassword, logInUser } from '../actions/AuthenticationActions'

class Login extends Component  {

    _logInUser(){
        const { email, password } = this.props
        this.props.logInUser( { email, password } )
    }

    renderEnterButton(){
        if(this.props.loadingLogin){
            return(
                <ActivityIndicator size='large' /> //loading spinner 
            )
        }
        return(
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => this._logInUser()}
            >
                <Text style={styles.labelButton}>ENTER</Text>
            </TouchableOpacity>
        )
    }

    render(){

        return (
            <View style={styles.container}>

                <View style={styles.contentWrapper}>
                    <View>
                        <Text style={styles.labelInput}>E-mail</Text>
                        <TextInput 
                            value={this.props.email} 
                            style={styles.textInput} 
                            placeholder="e-mail" 
                            placeholderTextColor="#ccc" 
                            onChangeText={text => this.props.modifyEmail(text)} 
                        />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Password</Text>
                        <TextInput secureTextEntry 
                            value={this.props.password} 
                            style={styles.textInput} 
                            placeholder="password" 
                            onChangeText={text => this.props.modifyPassword(text)} 
                        />

                        <Text style={styles.error}>{this.props.errorLogIn}</Text>
                    </View>

                    { this.renderEnterButton() }

                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    errorLogIn: state.AuthenticationReducer.errorLogIn,
    loadingLogin: state.AuthenticationReducer.loadingLogin,
})

export default connect( mapStateToProps, { modifyEmail, modifyPassword, logInUser } )(Login)


const styles = StyleSheet.create({

    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#FFFFFF',
    },

    contentWrapper: {
        marginTop: 70,
    },

    textInput: {
        top: 0,
        fontSize: 20,
        height: 45,
        borderColor: 'lightgray', 
        borderWidth: 1, 
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        margin: 5,
        padding: 5,
    },

    labelInput: {
        marginTop: 5,
        marginLeft: 5,
        fontSize: 14,
    },

    button: {
      backgroundColor: '#4593C5',
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
  
    error: {
      color: '#ff0000',
      fontSize: 16,
      alignSelf: 'center',
    },
  
  });

