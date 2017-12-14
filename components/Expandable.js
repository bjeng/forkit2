import React,{Component} from 'react'
import {StyleSheet,Text,View,Image,TouchableOpacity,Animated} from 'react-native'; //Step 1
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';

class Expandable extends Component{
    constructor(props){
        super(props);
        this.state = {       //Step 3
            category       : props.category,
            title : "test",
            expanded    : false,
            animation   : new Animated.Value(84)
        };
    }

    toggle(){
      let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

      this.setState({
          expanded : !this.state.expanded  //Step 2
      });

      this.state.animation.setValue(initialValue);  //Step 3
      Animated.spring(     //Step 4
          this.state.animation,
          {
              toValue: finalValue
          }
      ).start();  //Step 5
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }


    render(){
        //Step 5
        // console.log('expandable state', this.state)
        return (
            <Animated.View style={[styles.container, {height: this.state.animation}]} >
                <TouchableOpacity style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)} onPress={this.toggle.bind(this)}>
                  <View
                      style={styles.button}
                      underlayColor="#f1f1f1">
                      <Image
                          style={styles.buttonImage}
                          source={require('../assets/DesktopCopy2Black.png')}
                      ></Image>
                  </View>
                    <View style={styles.title}>
                      <Text style={styles.titleText}>{this.state.category}</Text>
                    </View>
                    <View
                        style={styles.button}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={require('../assets/DesktopCopy2Black.png')}
                        ></Image>
                    </View>
                </TouchableOpacity>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {/* {this.props.children} */}
                    <Text>
                      HELLO JUST TESTING WHAT THIS DOES AND TO SEE IF IT SHOWS UP AND EVERYTHING
                      LETS MAKE IT A LITTLE LONGER SO ITS BETTER TO SEE ALL THE EXPANDING AND COLLAPSING AND WHATNOT
                      WHAT IS MINHEIGHT AND MAX HEIGHT. DOES IT EVEN MATTER??? BLOCK OF TEXT JUST TO SEE
                    </Text>
                </View>

            </Animated.View>
        );
    }
}
export default Expandable;

var styles = StyleSheet.create({
    container: {
      borderColor: '#fff',
      borderBottomWidth: scale(1),
      overflow:'hidden',
    },
    titleContainer: {
      flexDirection: 'row',
      borderColor: '#fff',
      borderBottomWidth: scale(1),
      height: verticalScale(84)
    },
    title: {
      flex    : 1,
      padding : 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleText: {
      color   :'white',
      fontWeight:'bold',
      fontSize: moderateScale(20),
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonImage: {
      width: 30,
      height: 25
    },
    body: {
      padding: 10,
      paddingTop: 0,
    }
});
