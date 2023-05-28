import React, { useEffect } from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import awardbg from '../assets/award_bg.png';
import awardPlatform from '../assets/awardPlatform.png';
import girlClap from '../assets/girlClap.png';
import castingLogo from '../assets/castingLogo.png';

const Screen1 = ({ navigation }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.navigate('Screen2'); 
        }, 3000); 
    })

return (
    <ImageBackground source={awardbg} style={styles.background} resizeMode="cover">
      <Image style={styles.castingLogo} source={castingLogo} />
      <Image style={styles.platform} source={awardPlatform} />
      <Image style={styles.girl} source={girlClap} />
      
      <View style={styles.castingLogoContainer}>
        <Text style={styles.castingLogoText}>4:52:59</Text>
      </View>
      <View style={styles.castingLogoContainer1}>
        <Text style={styles.castingLogoText1}>CASTING CALL</Text>
      </View>
      <View style={styles.results}>
        <Text style={styles.resultsText}>The Results R In!</Text>
      </View>
    </ImageBackground>
  );
}

export default Screen1;

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
    top: '37%',
    left: '5%',
    height: 500,
    width: 400,
  },
  castingLogo: {
    position: 'absolute',
    top: '10%',
    left: '36%',
    height: 100,
    width: 100,
  },
  castingLogoContainer: {
    position: 'absolute',
    top: '15%',
    left: '40%',
    transform: [{ rotate: '-11deg' }],
  },
  castingLogoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  castingLogoContainer1: {
    position: 'absolute',
    top: '22%',
    left: '25%',
    transform: [{ rotate: '-11deg' }],
  },
  castingLogoText1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  results: {
    position: 'absolute',
    top: '30%',
    left: '10%',
  },
  resultsText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'yellow',
  },
});
