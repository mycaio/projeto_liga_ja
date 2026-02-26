import React from 'react';
import { View } from 'react-native';
import DefaultButton from '../DefaultButton';
import styles from './style';


interface LayoutBotoesProps {
  onInsert: (s: string) => void;
  onEvaluate: () => void;
  onClear: () => void;
  onBackspace: () => void;
}

const botoes = [
  ['C', '(', ')', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['±', '0', ',', '=']
];

const ButtonsOperations: React.FC<LayoutBotoesProps> = ({
  onInsert,
  onEvaluate,
  onClear,
  onBackspace
}) => {

  const tratarClique = (valor: string) => {
    if (valor === 'C') return onClear();
    if (valor === '=') return onEvaluate();

    const mapaOperadores: Record<string, string> = {
      '÷': '/',
      '×': '*',
      ',': '.',
      '±': '-'
    };

    const valorConvertido = mapaOperadores[valor] ?? valor;
    onInsert(valorConvertido);
  };

  return (
    <View>
      {botoes.map((linha, i) => (
        <View key={i} style={styles.container}>
          {linha.map((botao, j) => (
            <View key={j} style={styles.item}>
              <DefaultButton
                titulo={botao}
                onPress={() => tratarClique(botao)}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default ButtonsOperations;

