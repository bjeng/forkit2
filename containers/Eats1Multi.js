import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import Dash from 'react-native-dash';

const Eats1Multi = ({}) => {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/DiscoverEat-1.png")}/>
          <View style={styles.topTile}>
            <View style={styles.rowSubContainer}>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), right:scale(5) }}/>
              <Text style={styles.timer}> 00:10 </Text>
              <Dash dashGap={0} dashColor={'white'} style={{width:scale(35), height:verticalScale(1), left:scale(5) }}/>
            </View>
            <Text style={styles.topText}>How pricey are you going for?</Text>
          </View>
          <View style={styles.colSubContainer}>
            <TouchableOpacity style={styles.option}>
              <View style={styles.dollarCols}>
                <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.dollarCols}>
                <View style={styles.rowSubContainer}>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <View style={styles.dollarCols}>
                <View style={styles.rowSubContainer}>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                  <Image style={styles.dollarSigns} source={require("../assets/dollarsigns-white.png")}/>
                  <Text style={styles.plus}>+</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.option, styles.rowSubContainer]} onPress={Actions.eats2multi}>
              <Text style={styles.gambleText}> Take a Gamble </Text>
              <Image style={styles.dice} source={require("../assets/red-dice-512.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667),
    width: scale(375),
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667),
    width: scale(375)
  },
  topTile: {
    height: verticalScale(250),
    width: scale(375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: scale(45),
    fontFamily: 'Futura',
    color: 'white',
    textAlign: 'center'
  },
  rowSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colSubContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(375),
  },
  timer: {
    fontSize: moderateScale(45),
    color: 'white',
    fontFamily: 'Futura'
  },
  option: {
    borderWidth: moderateScale(3),
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,.20)',
    height: verticalScale(80),
    width: scale(340),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: scale(50),
    margin: moderateScale(8)
  },
  optionText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30),
    margin: scale(10)
  },
  dollarSigns: {
    height: verticalScale(50),
    width: scale(50)
  },
  dollarCols: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gambleText: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(30)
  },
  dice: {
    height: verticalScale(35),
    width: scale(35)
  },
  plus: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(45),
    fontWeight: 'bold',
    left: scale(5)
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Eats1Multi);
