import React, { useEffect } from 'react';
import { Animated, Easing, ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import awardbg from '../assets/award_bg.png';
import awardPlatform from '../assets/awardPlatform.png';
import girlClap from '../assets/girlClap.png';
import heart from '../assets/main-heart.png';
import additionalImage from '../assets/avtar2.png';
import arrow from '../assets/arrow.png';

const Screen2 = () => {
  const animatedValue = new Animated.Value(0);
  const navigation = useNavigation();

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(animatedValue, {
        toValue: 3,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
    ]);

    Animated.loop(animation).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, -100],
  });

  const handleButtonPress = () => {
    navigation.navigate('Screen3');
  };

  return (
    <ImageBackground source={awardbg} style={styles.background} resizeMode="cover">
      <Image style={styles.platform} source={awardPlatform} />
      <Image style={styles.girl} source={girlClap} />
      <View style={styles.heartContainer}>
        <Animated.View style={[styles.animationContainer, { transform: [{ translateX }] }]}>
          <Image style={styles.additionalImage} source={additionalImage} />
          <View styles={styles.textImage}>
            <Text style={styles.additionalImageText}>D Lister</Text>
            <Text style={styles.additionalImageText1}>Sally</Text>
          </View>
        </Animated.View>
        <Image style={styles.heart} source={heart} />
        <Text style={styles.counterText}>15000</Text>
      </View>
      <View style={styles.loveContainer}>
        <Text style={styles.loveText}>Gave U Some Love</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Image source={arrow} style={styles.arrow} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  platform: {
    position: 'absolute',
    top: '90%',
    width: '100%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  girl: {
    position: 'absolute',
    top: '50%',
    left: '15%',
    height: 400,
    width: 300,
  },
  loveContainer: {
    position: 'absolute',
    top: '20%',
    left: '20%',
  },
  loveText: {
    fontSize: 30,
    color: 'yellow',
  },
  heartContainer: {
    position: 'absolute',
    left: '27%',
    top: '30%',
    alignItems: 'center',
  },
  heart: {
    height: 150,
    width: 200,
  },
  counterText: {
    fontSize: 30,
    color: 'yellow',
    position: 'absolute',
    top: '40%',
    left: '30%',
  },
  additionalImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'yellow',
    position: 'relative',
    top: '30%',
  },
  additionalImageText: {
    fontSize: 40,
    color: 'yellow',
    position: 'relative',
    left: '120%',
    top: '-40%',
  },
  additionalImageText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'relative',
    left: '150%',
    top: '-40%',
  },
  animationContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: '-170%',
  },
  textImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: '70%',
    left: '70%',
  },
  arrow: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
