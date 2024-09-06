
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NextDrawCountdown from '../../components/countdown.js';
import CustomHeader from '../../components/CustomHeader.js';
import SearchButton from '../../components/SearchProducts.js';
import TakePictures from '../../components/TakePhotos.js';
import Ticket from '../../components/Ticket.js';
import LineOfText from '../../components/text.js';
import Greens from '../../components/greens.js';
import Welbees from '../../components/Welbees.js';
import Pavi from '../../components/Pavi.js'





const scanandwin = () => {
  return (
    <View>
      <SafeAreaView style={styles.HeaderContainer}>
      <View> 
      <CustomHeader></CustomHeader>
      </View>
  </SafeAreaView>
      <View style={styles.textContainer}> 
       <LineOfText></LineOfText>
        </View>
        <View style={styles.buttonRowContainer}>
      <SearchButton></SearchButton>
      <TakePictures></TakePictures>
      <Ticket></Ticket>
      </View>
      <View style={styles.CountdownContainer}>
     <NextDrawCountdown></NextDrawCountdown>
     </View>
     <View style={styles.buttonRowContainer}>
     <Greens></Greens>
     <Welbees></Welbees>
     <Pavi></Pavi>
     </View>
    </View>
  );
};


const styles = StyleSheet.create({
  HeaderContainer: {
    position: 'absolute',    
    top: 0,
    left: 0,
    right: 0,
    height: 120, 
    backgroundColor: '#ADB9C0',
    flexDirection: 'row',    
    justifyContent: 'space-between', 
    alignItems: 'center',   
    paddingHorizontal: 20,  
    elevation: 5,           
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    zIndex: 1000, 
},

textContainer: {
  marginTop: 125,       
  padding: 10,
  borderRadius: 5,
  marginHorizontal: 20,  
  backgroundColor: '#ADB9C0',
  elevation: 5,          
  shadowColor: '#000',    
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
},


buttonRowContainer: {
  flexDirection: 'row',    
  justifyContent: 'space-around', 
  marginTop: 10,          
  padding: 10,            
},

CountdownContainer: {
    flex: 1,
    minHeight: 180,
    marginTop: 15,
   marginLeft:20,
   marginRight: 20,
    flexDirection: 'column',
    backgroundColor: '#ADB9C0',
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation: 5,            
    shadowColor: '#000',     
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  
  },
});


export default scanandwin;

