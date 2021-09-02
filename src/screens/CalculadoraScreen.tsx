import React, {useState} from 'react';
import {Text, View} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import ZeroButton from '../components/ZeroButton';
import {styles} from '../theme/appTheme';

const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('');

  const clean = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    //No aceptar doble .
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        // Evaluar si hay otro cero y hay punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
        // Evaluar si es diferente de 0 y no tiene punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
        // Evitar el 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        return;
        // Permite escribir decimales
      } else if (numeroTexto !== '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      return setNumero(numero.replace('-', ''));
    }

    return setNumero('-' + numero);
  };

  const del = () => {
    if (numero.length === 1) return setNumero('0');
    else if (numero.includes('-') && numero.length === 2) return setNumero('0');
    return setNumero(numero.slice(0, -1));
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={clean} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" accion={del} />
        <BotonCalc texto="÷" color="#FF9427" accion={armarNumero} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="x" color="#FF9427" accion={clean} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" accion={clean} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" accion={clean} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.fila}>
        <ZeroButton accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" accion={clean} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;

// const styles = StyleSheet.create({});
