import React, { useEffect, useState } from 'react';
import { Animated, Easing, ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import awardbg from '../assets/award_bg.png';
import awardPlatform from '../assets/awardPlatform.png';
import girlClap from '../assets/girlClap.png';
import heart from '../assets/main-heart.png';
import additionalImage from '../assets/avtar2.png';
import arrow from '../assets/arrow.png';

const Screen3 = () => {
    const [count, setCount] = useState(15000); 

    const navigation = useNavigation();
  
    useEffect(() => {
        const interval = setInterval(() => {
          setCount(prevCount => {
            const newCount = prevCount + 1000; 
            return newCount > 40000 ? 40000 : newCount; 
          });
        }, 100);
    
        return () => clearInterval(interval); 
      }, []);

  
  const handleButtonPress = () => {
    navigation.navigate('Screen1');
  };

  return (
    <ImageBackground source={awardbg} style={styles.background} resizeMode="cover">
      <Image style={styles.platform} source={awardPlatform} />
      <Image style={styles.girl} source={girlClap} />
      <View style={styles.congratsBox}>
        <Text style={styles.congratsText}>Congrats !</Text>
      </View>
      <View style={styles.heartContainer}>
        <Image style={styles.heart} source={heart} />
        <Animated.Text style={styles.counterText}>{count}</Animated.Text>
      </View>
      <View style={styles.loveContainer}>
        <Text style={styles.loveText}> 4 Friends Gave U</Text>
        <Text style={styles.loveText}> {'     '}Some Love</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Image source={arrow} style={styles.arrow} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Screen3;

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
    top: '10%',
    left: '20%',
  },
  loveText: {
    fontSize: 30,
    color: 'yellow',
  },
  heartContainer: {
    position: 'absolute',
    left: '27%',
    top: '25%',
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
  congratsBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    top: '47%',
    left: '67%',
  },
  congratsText: {
    fontSize: 20,
    color: 'pink',
    fontWeight: 'bold',
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
