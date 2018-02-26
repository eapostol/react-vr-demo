import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
	Text,
  View,
} from 'react-vr';

/*
AppRegistry - tells ReactVr what is root of project
asset - helper fn. - looks at static-assets
Pano - controls scene of application
Text - adds a 'Text' Component
View - generic VR component to wrap other components, i.e. text.
 */
// render - basic method in React JSX, returns the native equivalent elements

// create a private class . add Text import
class SomeText extends Component {

	constructor(){
		super();
	}

	render() {
		let textStyle = {
			backgroundColor: '#dddddd',
			textAlign: 'center',
			color: '#FF0000',
			fontSize: 0.1,
		};
		let someTextView = <Text style={textStyle}>{this.props.text}</Text>;
		return (someTextView);
	}
}

export default class ReactVRDemo2018_02 extends React.Component {

	// don't forget to change the image
	// x,y,z

	constructor(props){
		super(props);
		this.translateVal = {
			translate: [0,0.25,-0.5]
		};

		this.styleObj = {
			transform:[this.translateVal],
			layoutOrigin:[0.5, 0.5]
		};
	}


  render() {



  	let theView = <View>
		<Pano source={asset('reactvrmeetup_old.jpg')}></Pano>
		<View style={this.styleObj}>
			<SomeText text="DEV.TO 2018"/>
			<SomeText text="React VR Fun!"/>
		</View>
	</View>;

	  return (theView);
  }
};

AppRegistry.registerComponent('ReactVRDemo2018_02', () => ReactVRDemo2018_02);
