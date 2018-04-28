import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Home from './components/Home'
import LogIn from './components/Login'
import SignUp from './components/Signup'
import AddMeal from './components/AddMeal'
import PhotoMeal from './components/PhotoMeal'
import MyMeals from './components/MyMeals'
import DetailsMeal from './components/DetailsMeal'
import MyPlaces from './components/MyPlaces'
import Principal from './components/Principal'


export default Routes = () => (
    <Router>
        <Scene key='root' navigationBarStyle={{ backgroundColor: '#4593C5' }} titleStyle={{ color: '#fff' }} tintColor='#fff'>
            < Scene initial hideNavBar={true} key='home' component={Home} title="" navigationBarStyle={{ backgroundColor: '#ffff' }}/>
            < Scene hideNavBar={false} key='login' component={LogIn} title="Log In" />
            < Scene hideNavBar={false} key='signup' component={SignUp} title="Sign Up" />
            < Scene hideNavBar={false} key='addmeal' component={AddMeal} title="What A I Eating"  /> 
            < Scene hideNavBar={false} key='photo' component={PhotoMeal} title="Add Meal"  />
            < Scene hideNavBar={false} key='mymeals' component={MyMeals} title="My Meals" />
            < Scene hideNavBar={false} key='detailsmeal' component={DetailsMeal} title="Details Meals" />
            < Scene hideNavBar={false} key='myplaces' component={MyPlaces} title="My Places" />
            < Scene hideNavBar={true} key='principal' component={Principal} title="What Am I Eating" />
        </Scene>
    </Router>
);
