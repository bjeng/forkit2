import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';

const DiscoverHome = ({ user }) => {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/Discover.png")}/>
          <View style={styles.addContainer}>
            <Image style={styles.addIcon} source={require("../assets/addFriends.png")}/>
          </View>
          <Text style={styles.discoverText}>Eats</Text>
          <TouchableOpacity style={styles.playButton} onPress={Actions.myevents}>
            <View style={styles.imageContainer}>
              <Image style={styles.statusIcon} source={require("../assets/eventstatusWhite.png")}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.playText}>My Events</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={Actions.eventform}>
            <View style={styles.imageContainer}>
              <Image style={styles.multiIcon} source={require("../assets/groupWhite.png")}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.playText}>Multiplayer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton} onPress={Actions.eats1}>
            <View style={styles.imageContainer}>
              <Image style={styles.singleIcon} source={require("../assets/single.png")}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.playText}>Singleplayer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}

DiscoverHome.propTypes = {
};

const mapStateToProps = (state) => {
    return {
      user: state.user
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
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: verticalScale(667-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667-50),
    width: scale(375)
  },
  discoverText: {
    fontSize: moderateScale(80),
    fontFamily: 'Futura',
    color: 'white',
    margin: 10
  },
  playButton: {
    width: scale(327),
    height: verticalScale(100),
    backgroundColor: 'rgba(255,255,255,.40)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: scale(327/2),
    marginBottom: verticalScale(20),
  },
  imageContainer: {
    width: scale(100),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    width: scale(327-100),
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  playText: {
    fontSize: moderateScale(30),
    fontFamily: 'Futura',
    color: 'white',
  },
  addContainer: {
    width: scale(375),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
    right: scale(10)
  },
  addIcon: {
    height: verticalScale(80),
    width: scale(85),
    overflow: 'visible'
  },
  statusIcon: {
    height: verticalScale(80),
    width: scale(80),
    overflow: 'visible'
  },
  multiIcon: {
    height: verticalScale(70),
    width: scale(85),
    overflow: 'visible'
  },
  singleIcon: {
    height: verticalScale(60),
    width: scale(50),
    overflow: 'visible'
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverHome);
