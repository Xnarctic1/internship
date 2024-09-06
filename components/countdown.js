import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import moment from 'moment';

const Countdown = () => {
  const [nextDrawTime, setNextDrawTime] = useState(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [loading, setLoading] = useState(true);
  const [nextDrawDate, setNextDrawDate] = useState(null);

  // Function to fetch the next draw date from the mock API
  const fetchNextDraw = async () => {
    try {
      const response = await axios.get('https://api.mockfly.dev/mocks/faea9440-93a5-46a1-9df4-067f4a94b732/next-lottery-draw');
      const drawDate = response.data.nextDraw;
      setNextDrawTime(drawDate);
      setNextDrawDate(new Date(drawDate).toLocaleDateString()); 
      setLoading(false);
    } catch (error) {
      console.error('Error fetching next draw date', error);
      setLoading(false);
    }
  };

  // Function to calculate the countdown
  const calculateCountdown = (targetTime) => {
    const now = moment();
    const then = moment(targetTime);
    const diff = then.diff(now); 
    const duration = moment.duration(diff);

    setCountdown({
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    });
  };

  useEffect(() => {
    fetchNextDraw();
  }, []);

  useEffect(() => {
    if (nextDrawTime) {
      const intervalId = setInterval(() => {
        calculateCountdown(nextDrawTime);
      }, 1000);

      return () => clearInterval(intervalId); 
    }
  }, [nextDrawTime]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading next draw...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Next Draw Date:</Text>
        <View style={styles.dateBox}>
          <Text style={styles.date}>{nextDrawDate}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Next Draw In:</Text>
        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>{countdown.days}d</Text>
          <Text style={styles.countdownText}>{countdown.hours}h</Text>
          <Text style={styles.countdownText}>{countdown.minutes}m</Text>
          <Text style={styles.countdownText}>{countdown.seconds}s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  topContainer: {
    marginBottom: 8, 
  },
  bottomContainer: {
    alignItems: 'center', 
  },
  title: {
    fontSize: 20,
    textAlign: 'center', 
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, 
  },
  date: {
    textAlign: 'center', 
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  countdownText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Countdown;