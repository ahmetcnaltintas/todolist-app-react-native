import {Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './Card.style';

const Card = ({text}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePress = () => {
    setIsCompleted(!isCompleted);
    const newStatus = !isCompleted;
    Alert.alert(
      'Görev Silindi',
      newStatus ? 'Bu görevi tamamladınız!' : 'Bu görevi tamamlamadınız!',
      [{text: 'Tamam'}],
    );
  };

  return (
    <View style={[styles.container, isCompleted && styles.completedContainer]}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.card_text, isCompleted && styles.completedText]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
