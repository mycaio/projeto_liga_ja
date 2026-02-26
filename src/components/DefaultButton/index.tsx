import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

interface MeuBotaoProps {
  titulo: string;
  onPress: () => void;
}

const DefaultButton: React.FC<MeuBotaoProps> = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{titulo}</Text>
    </TouchableOpacity>
  );
};


export default DefaultButton;
