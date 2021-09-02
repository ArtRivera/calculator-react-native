import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  accion: (num: string) => void;
}

const BotonCalc = ({texto, color = '#2D2D2D', accion}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: botonTextColor(color),
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const botonTextColor = (color: string) =>
  color === '#9B9B9B' ? 'black' : 'white';

export default BotonCalc;
