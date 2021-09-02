import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  accion: (num: string) => void;
}

const ZeroButton = ({accion}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion('0')}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.boton,
          backgroundColor: '#2D2D2D',
          width: 180,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonTexto,
            color: 'white',
          }}>
          0
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ZeroButton;
