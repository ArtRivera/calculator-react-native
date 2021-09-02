import React from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import ZeroButton from '../components/ZeroButton';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    clean,
    armarNumero,
    positivoNegativo,
    del,
    sumar,
    restar,
    multiplicar,
    dividir,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={clean} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" accion={del} />
        <BotonCalc texto="÷" color="#FF9427" accion={dividir} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="x" color="#FF9427" accion={multiplicar} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" accion={restar} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" accion={sumar} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <ZeroButton accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;

// const styles = StyleSheet.create({});
