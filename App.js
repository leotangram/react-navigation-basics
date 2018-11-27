/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import About from './src/screens/about'
import Home from './src/screens/home'
import Login from './src/screens/login'
import Profile from './src/screens/profile'

const MainNavigator = createStackNavigator({
  About,
  Home,
  Login,
  Profile
})

const AppNavigator = createAppContainer(MainNavigator)

export default AppNavigator