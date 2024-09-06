import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';





const CustomHeader = () => {
  return (

    <View style={styles.profileContainer}>
        <Image source={require('../assets/images/profile.jpg')} style={styles.profileImage}
      /> 
      <Text style={styles.profileName}>Hi Mark!</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 17,
    flexDirection: 'row',  
    alignItems: 'center',  
    padding: 10,   
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,      
    marginRight: 10,      
  },
  profileName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },


});
export default CustomHeader;

 