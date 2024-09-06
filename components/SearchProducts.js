import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, Linking } from 'react-native';



const SearchProducts = () => {
  const handlePress = () => {
    const url = 'about:blank'; 
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/searchButton.png' )} 
          style={styles.image}
        />
        </View>
        <Text style={styles.buttonText}>Find Products</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  imageContainer: {
    width: 60, 
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    marginBottom: 10, 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADB9C0',
    padding: 10,
    width: 110,
    height: 110,
    flexDirection: 'column',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
});



  
export default SearchProducts;