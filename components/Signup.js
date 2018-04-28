import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { modifyName, modifyEmail, modifyPassword, signUpUser } from '../actions/AuthenticationActions'

class Signup extends Component {

    _signUpUser(){
        const { name, email, password } = this.props;
        this.props.signUpUser( { name, email, password } );
    }

    renderSignupButton(){

        if(this.props.loadingSignUp){
            return(
                <ActivityIndicator />
            )
        }
        return(
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => this._signUpUser()}
            >
                <Text style={styles.labelButton}>CREATE USER</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return (
            <View style={styles.container}>

                <View style={styles.contentWrapper}>
                    <View>
                        <Text style={styles.labelInput}>Name:</Text>
                        <TextInput 
                            value={this.props.name} 
                            style={styles.textInput} 
                            placehodler="name" 
                            placeholderTextColor="#ccc" 
                            onChangeText={text => this.props.modifyName(text)} 
                        />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>E-mail</Text>
                        <TextInput 
                            value={this.props.email} 
                            style={styles.textInput} 
                            placehodler="e-mail" 
                            placeholderTextColor="#ccc" 
                            onChangeText={text => this.props.modifyEmail(text)} 
                        />
                    </View>
                    <View>
                        <Text style={styles.labelInput}>Password:</Text>
                        <TextInput secureTextEntry 
                            value={this.props.password} 
                            style={styles.textInput} 
                            placehodler="password" 
                            placeholderTextColor="#ccc" 
                            onChangeText={text => this.props.modifyPassword(text)} 
                        />
                    </View>

                    <Text style={styles.error}>{this.props.errorSignUp}</Text>
                </View>

                {this.renderSignupButton()}

            </View>
        
        )
    }
}

const mapStateToProps = state => ({
    name: state.AuthenticationReducer.name,
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    errorSignUp: state.AuthenticationReducer.errorSignUp,
    loadingSignUp: state.AuthenticationReducer.loadingSignUp,
})


export default connect( 
    mapStateToProps, 
    { 
        modifyName, 
        modifyEmail, 
        modifyPassword,
        signUpUser
     }
    )(Signup)



//Page styles
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
        fontSize: 20,
        height: 40,
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
  
    error: {
      color: '#ff0000',
      fontSize: 16,
      alignSelf: 'center',
    },
  
  });
