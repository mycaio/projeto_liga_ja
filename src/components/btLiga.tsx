import React from 'react';
import { Button, Linking } from 'react-native';

export default function Tela() {

  const fazerLigacao = () => {
    Linking.openURL('tel:43988547045');
  };

  return (
    <Button
      title="Ligar"
      onPress={fazerLigacao}
    />
  );
}
