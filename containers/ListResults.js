import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale } from '../scaler.js';
import Navbar from '../components/Navbar.js';
import MinibarResults from '../components/MinibarResults.js';
import StarRating from 'react-native-star-rating';
import RestResult from '../components/RestResult.js';
import restImage from "../assets/burger.jpg";
import Tabbar from '../components/Tabbar.js';

const ListResults = ({}) => {
    return (
      <View style={styles.container}>
        <MinibarResults title={"Results"} aLink={() => Actions.listresults()} bLink={() => Actions.listmap()}/>
        <View style={styles.background}>
          <Image style={styles.backgroundColor} source={require("../assets/MultiForm.png")}/>
          <View style={styles.listContainer}>
            <ScrollView>
              <RestResult name={'InnOut Burgers is the best burger ever'} rating={5} reviews={'1,000 reviews on Yelp'}
                distance={'0.1 miles away from you'} img={restImage} border={true}/>
              <RestResult name={'ShakeShack'} rating={4} reviews={'500 reviews on Yelp'}
                distance={'0.3 miles away from you'} img={restImage} border={true}/>
              <RestResult name={'Five Guys'} rating={3} reviews={'300 reviews on Yelp'}
                distance={'0.4 miles away from you'} img={restImage} border={true}/>
            </ScrollView>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.gamble} onPress={Actions.singleresult}>
              <Text style={styles.gambleText}>Take a Gamble</Text>
              <Image style={styles.dice} source={require("../assets/red-dice-512.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}

ListResults.propTypes = {
};

const mapStateToProps = (state) => {
    console.log(state);
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
    backgroundColor: 'transparent'
  },
  background: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    height: verticalScale(667-75-50),
    width: scale(375)
  },
  backgroundColor: {
    top: verticalScale(0),
    position: 'absolute',
    height: verticalScale(667),
    width: scale(375)
  },
  listContainer: {
    flex: 6,
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  textStyle: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: moderateScale(16)
  },
  restaurantIcon: {
    height: verticalScale(80),
    width: scale(80),
    borderRadius: scale(40),
    opacity: 0.7
  },
  menuIcon: {
    height: verticalScale(60),
    width: scale(60),
    borderRadius: scale(30)
  },
  dice: {
    height: verticalScale(35),
    width: scale(35),
    left: scale(15)
  },
  gamble: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(255,255,255,.5)",
    borderRadius: scale(75),
    margin: moderateScale(5),
    width: scale(300),
    bottom: verticalScale(3)
  },
  gambleText: {
    fontFamily: 'Futura',
    color: '#646464',
    fontSize: moderateScale(30),
  },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListResults);
