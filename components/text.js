
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LineOfText= () => {
return (
<View>
<Text style={styles.textContent}>
        It's simple to win the following prizes, all you need is to:
        </Text>
        </View>

)}

const styles = StyleSheet.create({
    textContent: {
        fontSize: 18,
        leterSpacing: 3,
        color: '#333',
        textAlign: 'center',   
      },
    })


    export default LineOfText;