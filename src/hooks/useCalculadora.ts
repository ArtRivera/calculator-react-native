import {useRef, useState} from 'react';

enum OPERADORES {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('');
  const ultimaOperacion = useRef<OPERADORES>();

  const clean = () => {
    setNumero('0');
    setNumeroAnterior('0');
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

  const storeNumber = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.replace('.', ''));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const dividir = () => {
    storeNumber();
    ultimaOperacion.current = OPERADORES.dividir;
  };

  const multiplicar = () => {
    storeNumber();
    ultimaOperacion.current = OPERADORES.multiplicar;
  };

  const restar = () => {
    storeNumber();
    ultimaOperacion.current = OPERADORES.restar;
  };

  const sumar = () => {
    storeNumber();
    ultimaOperacion.current = OPERADORES.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case OPERADORES.sumar:
        setNumero(`${num1 + num2}`);
        break;

      case OPERADORES.restar:
        setNumero(`${num2 - num1}`);
        break;

      case OPERADORES.multiplicar:
        setNumero(`${num1 * num2}`);
        break;

      case OPERADORES.dividir:
        const div = isNaN(num2 / num1) ? '0' : num2 / num1;
        setNumero(`${div}`);
        break;

      default:
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    ultimaOperacion,
    clean,
    armarNumero,
    positivoNegativo,
    del,
    sumar,
    restar,
    multiplicar,
    dividir,
    calcular,
  };
};
