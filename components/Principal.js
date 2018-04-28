import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'
// import { Ionicons } from '@expo/vector-icons'

import TabBarMenu from './TabBarMenu'
import AddMeal from './AddMeal'
import MyMeals from './MyMeals'
import MyPlaces from './MyPlaces'

// //TabBar icons
const ico_addmeal = require('../images/home.png')
const ico_mymeals = require('../images/bar-chart.png')
const ico_myplaces = require('../images/map_view.jpg')


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

export default class Principal extends Component {
    state = {
          index: 0,
          routes: [
            { key: 'first', title: 'Add Meal', icon: 'home' },
            { key: 'second', title: 'My Meals', icon: 'timeline' },
            { key: 'third', title: 'My Places', icon: 'map-marker' },
          ],
      };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBarMenu {...props} />;

    _renderScene = SceneMap({
        first: AddMeal,
        second: MyMeals,
        third: MyPlaces,
    });

    render(){
        return(
            <TabViewAnimated
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
            //   renderFooter={true}
            />
        );
    }
}
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    badge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

});

//TABBAR AS FOOTER

// import type { Route, NavigationState } from 'react-native-tab-view/types'

// type State = NavigationState<
//   Route<{
//     key: string,
//     icon: string,
//     color: string,
//   }>
// >;

// const initialLayout = {
//     height: 0,
//     width: Dimensions.get('window').width,
// };

// export default class Principal extends Component<*, State> {
//     static title = 'Custom indicator';
//     static backgroundColor = '#263238';
//     static appbarElevation = 4;

//     state = {
//         index: 0,
//         routes: [
//           { key: 'first', title: 'Add Meal', icon: 'home' },
//           { key: 'second', title: 'My Meals', icon: 'timeline' },
//           { key: 'third', title: 'My Places', icon: 'map-marker' },
//         ],
//     };



//   _handleIndexChange = index =>
//   this.setState({
//     index,
//   });

// _renderIndicator = props => {
//   const { width, position } = props;
//   const inputRange = [
//     0,
//     0.48,
//     0.49,
//     0.51,
//     0.52,
//     1,
//     1.48,
//     1.49,
//     1.51,
//     1.52,
//     2,
//   ];

//   const scale = position.interpolate({
//     inputRange,
//     outputRange: inputRange.map(x => (Math.trunc(x) === x ? 2 : 0.1)),
//   });
//   const opacity = position.interpolate({
//     inputRange,
//     outputRange: inputRange.map(x => {
//       const d = x - Math.trunc(x);
//       return d === 0.49 || d === 0.51 ? 0 : 1;
//     }),
//   });
//   const translateX = position.interpolate({
//     inputRange: inputRange,
//     outputRange: inputRange.map(x => Math.round(x) * width),
//   });
//   const backgroundColor = position.interpolate({
//     inputRange,
//     outputRange: inputRange.map(
//       x => props.navigationState.routes[Math.round(x)].color
//     ),
//   });

//   return (
//     <Animated.View
//       style={[styles.container, { width, transform: [{ translateX }] }]}
//     >
//       <Animated.View
//         style={[
//           styles.indicator,
//           { backgroundColor, opacity, transform: [{ scale }] },
//         ]}
//       />
//     </Animated.View>
//   );
// };

// _renderIcon = ({ route }) => (
//   <View name={route.icon} size={24} style={styles.icon} />
// );

// _renderBadge = ({ route }) => {
//   if (route.key === '2') {
//     return (
//       <View style={styles.badge}>
//         <Text style={styles.count}>42</Text>
//       </View>
//     );
//   }
//   return null;
// };

// _renderFooter = props => (
//   <TabBarMenu
//     {...props}
//     renderIcon={this._renderIcon}
//     renderBadge={this._renderBadge}
//     renderIndicator={this._renderIndicator}
//     style={styles.tabbar}
//   />
// );

// // _renderScene = SceneMap({
// //   article: Article,
// //   contacts: Contacts,
// //   albums: Albums,
// // });
// _renderScene = SceneMap({
//     first: AddMeal,
//     second: MyMeals,
//     third: MyPlaces,
// });

// render() {
//   return (
//     <TabViewAnimated
//       style={this.props.style}
//       navigationState={this.state}
//       renderScene={this._renderScene}
//       renderFooter={this._renderFooter}
//       onIndexChange={this._handleIndexChange}
//     />
//   );
// }
// }

// const styles = StyleSheet.create({
// tabbar: {
//   backgroundColor: '#4593C5',
//   overflow: 'hidden',
// },
// icon: {
//   backgroundColor: 'transparent',
//   // color: 'white',
// },
// container: {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
//   opacity: 0.8,
// },
// indicator: {
//   width: 48,
//   height: 48,
//   borderRadius: 24,
//   backgroundColor: '#0084ff',
//   margin: 6,
// },
// badge: {
//   marginTop: 4,
//   marginRight: 32,
//   backgroundColor: '#f44336',
//   height: 24,
//   width: 24,
//   borderRadius: 12,
//   alignItems: 'center',
//   justifyContent: 'center',
//   elevation: 4,
// },
// count: {
//   color: '#fff',
//   fontSize: 10,
//   fontWeight: 'bold',
//   marginTop: -2,
// },
// });
