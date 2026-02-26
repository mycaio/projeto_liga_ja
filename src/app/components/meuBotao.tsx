import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface MeuBotaoProps {
  titulo: string;
  onPress: () => void;
}

const MeuBotao: React.FC<MeuBotaoProps> = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   button: {
        backgroundColor: "#303136",
        padding: 25,
        width: 80,
        borderRadius: 100,
        marginTop: 10,
        
        alignItems: "center"
    },
    buttonText: {
        color: "#29A8FF",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default MeuBotao;
