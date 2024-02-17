import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import CustomTabBar from '../components/common/CustomTabBar';
// import { Platform, View } from 'react-native';

// Containers
import HomeContainer from '../containers/Home';
// import DiscoverContainer from '../containers/Discover';
// import DiscoverDetailsContainer from '../containers/DiscoverDetails';
// import MeetUpContainer from '../containers/MeetUp';
// import MeetUpDetailsContainer from '../containers/MeetUpDetails';
// import AddMeetupContainer from '../containers/AddMeetup';
// import AddMeetupReviewContainer from '../containers/AddMeetupReview';
// import FriendsContainer from '../containers/Friends';
// import FriendRequestContainer from '../containers/FriendRequest';
// import AddPetContainer from '../containers/AddPet';
// import DiscussionsContainer from '../containers/Discussions';

// import ProfileContainer from '../containers/Profile';
// import EditProfileContainer from '../containers/EditProfile';
// import NotificationContainer from '../containers/Notification';
// import AccountsSettingContainer from '../containers/AccountsSetting';
// import NotificationSettingContainer from '../containers/NotificationSetting';
// import UserProfileContainer from '../containers/UserProfile';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const shadowStyle = Platform.select({
//     ios: {
//         shadowColor: 'rgba(0, 0, 0, 0.4)',
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         shadowOpacity: 1,
//         shadowRadius: 10,
//     },
//     android: {
//         elevation: 3,
//     },
// });

// function TabNavigator() {
//     return (
//         <Tab.Navigator
//             initialRouteName="Home"
//             screenOptions={{
//                 headerShown: false,
//                 tabBarStyle: {
//                     ...shadowStyle,
//                 },
//             }}
//             tabBar={(props) => <CustomTabBar {...props} />}
//         >
//             <Tab.Screen name="Discover" component={DiscoverContainer} options={{ tabBarLabel: '' }} />
//             <Tab.Screen name="Meetups" component={MeetUpContainer} options={{ tabBarLabel: '' }} />
//             <Tab.Screen name="Home" component={HomeContainer} options={{ tabBarLabel: '' }} />
//             <Tab.Screen name="Friends" component={FriendsContainer} options={{ tabBarLabel: '' }} />
//             <Tab.Screen name="Profile" component={ProfileContainer} options={{ tabBarLabel: '' }} />
//             <Tab.Screen name="Notification" component={NotificationContainer} options={{ tabBarLabel: '' }} />
//         </Tab.Navigator>
//     );
// }


// export default function PrivateNavigation({ }) {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
//                 <Stack.Screen
//                     name="TabNavigator"
//                     component={TabNavigator}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen name="EditProfile" component={EditProfileContainer} />
//                 <Stack.Screen name="UserProfile" component={UserProfileContainer} />
//                 <Stack.Screen name="MeetUpDetails" component={MeetUpDetailsContainer} />
//                 <Stack.Screen name="AddMeetup" component={AddMeetupContainer} />
//                 <Stack.Screen name="AddMeetupReview" component={AddMeetupReviewContainer} />
//                 <Stack.Screen name="FriendRequest" component={FriendRequestContainer} />
//                 <Stack.Screen name="AddPet" component={AddPetContainer} />
//                 <Stack.Screen name="DiscoverDetails" component={DiscoverDetailsContainer} />
//                 <Stack.Screen name="AccountsSetting" component={AccountsSettingContainer} />
//                 <Stack.Screen name="NotificationSetting" component={NotificationSettingContainer} />
//                 <Stack.Screen name="Discussions" component={DiscussionsContainer} />
//             </Stack.Navigator>
//         </NavigationContainer >
//     );
// }

export default function PrivateNavigation({ }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeContainer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}