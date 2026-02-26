import React from 'react';
import { StyleSheet, View } from 'react-native';
import MeuBotao from './meuBotao';

interface LayoutBotoesProps {
  onInsert: (s: string) => void;
  onEvaluate: () => void;
  onClear: () => void;
  onBackspace: () => void;
}

const LayoutBotoes: React.FC<LayoutBotoesProps> = ({ onInsert, onEvaluate, onClear, onBackspace }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.item}><MeuBotao titulo="C" onPress={onClear} /></View>
        <View style={styles.item}><MeuBotao titulo="(" onPress={() => onInsert('(')} /></View>
        <View style={styles.item}><MeuBotao titulo=")" onPress={() => onInsert(')')} /></View>
        <View style={styles.item}><MeuBotao titulo="÷" onPress={() => onInsert('/')} /></View>
      </View>

      <View style={styles.container}>
        <View style={styles.item}><MeuBotao titulo="7" onPress={() => onInsert('7')} /></View>
        <View style={styles.item}><MeuBotao titulo="8" onPress={() => onInsert('8')} /></View>
        <View style={styles.item}><MeuBotao titulo="9" onPress={() => onInsert('9')} /></View>
        <View style={styles.item}><MeuBotao titulo="×" onPress={() => onInsert('*')} /></View>
      </View>

      <View style={styles.container}>
        <View style={styles.item}><MeuBotao titulo="4" onPress={() => onInsert('4')} /></View>
        <View style={styles.item}><MeuBotao titulo="5" onPress={() => onInsert('5')} /></View>
        <View style={styles.item}><MeuBotao titulo="6" onPress={() => onInsert('6')} /></View>
        <View style={styles.item}><MeuBotao titulo="-" onPress={() => onInsert('-')} /></View>
      </View>

      <View style={styles.container}>
        <View style={styles.item}><MeuBotao titulo="1" onPress={() => onInsert('1')} /></View>
        <View style={styles.item}><MeuBotao titulo="2" onPress={() => onInsert('2')} /></View>
        <View style={styles.item}><MeuBotao titulo="3" onPress={() => onInsert('3')} /></View>
        <View style={styles.item}><MeuBotao titulo="+" onPress={() => onInsert('+')} /></View>
      </View>

      <View style={styles.container}>
        <View style={styles.item}><MeuBotao titulo="±" onPress={() => onInsert('-')} /></View>
        <View style={styles.item}><MeuBotao titulo="0" onPress={() => onInsert('0')} /></View>
        <View style={styles.item}><MeuBotao titulo="," onPress={() => onInsert('.')} /></View>
        <View style={styles.item}><MeuBotao titulo="=" onPress={onEvaluate} /></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  item: {
    marginRight: 10,
  },
});

export default LayoutBotoes;
