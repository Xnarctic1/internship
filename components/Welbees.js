import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, Linking } from 'react-native';



const Welbees = () => {
  const handlePress = () => {
    const url = 'about:blank';
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };



  return (
    <View style={styles.container}>
      {}
      <TouchableOpacity onPress={handlePress} style={styles.button}>
      <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/welbees.png' )} 
            style={styles.image}
          />
        </View>
        {/* Text half of the button */}
        <View style={styles.textContainer}>
          <Text style={styles.largeText}>€100</Text>
          <Text style={styles.smallText}>Shopping Voucher</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

    button: {
        width: 110, 
        height: 150, 
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#007BFF', 
      },
      imageContainer: {
        flex: 1, 
      },
      image: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover',
      },
      textContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#000',
      },
      largeText: {
        fontSize: 30,
        color: '#fff', 
        fontWeight: 'bold',
      },
      smallText: {
        fontSize: 10,
        color: '#fff', 
      },
    });


  
export default Welbees;