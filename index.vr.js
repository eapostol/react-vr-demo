import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';

/*
AppRegistry - tells ReactVr what is root of project
asset - helper fn. - looks at static-assets
Pano - controls scene of application
View - generic VR component to wrap other components, i.e. text.
 */
// render - basic method in React JSX, returns the native equivalent elements

export default class ReactVRDemo2018_02 extends React.Component {
  render() {
	  let theView = <View><Pano source={asset('reactvrmeetup_old.jpg')}></Pano></View>;
	  return (theView);
  }
};

AppRegistry.registerComponent('ReactVRDemo2018_02', () => ReactVRDemo2018_02);
