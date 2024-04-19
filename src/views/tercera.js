import React from 'react';
import { Image, Text, View } from 'react-native';
import { style_tercera } from '../styles/style_tercera';

const tercera = () => {
    return (
        <View style={style_tercera.divMain}>
            <View style={style_tercera.encabezado}>
                <Text style={style_tercera.title1}>TetraTilt</Text>
            </View>

            <View style={style_tercera.imageContainer}>
                <Text style={style_tercera.textoIzquierda}>Pesado</Text>
                <Image style={style_tercera.balanzaImg} source={require('../imgs/amarilla.png')} />
                <Text style={style_tercera.textoDerecha}>Ligero</Text>
            </View>

            <View style={style_tercera.imageContainer}>
                <Text style={style_tercera.textoIzquierda}>Pesado</Text>
                <Image style={style_tercera.balanzaImg2} source={require('../imgs/negra.png')} />
                <Text style={style_tercera.textoDerecha}>Ligero</Text>
            </View>

            <View style={style_tercera.divFooter}>
                <Text style={style_tercera.textFooter}>Bienvenidos al juego en el que tu cabeza tendrá que trabajar</Text>
            </View>
        </View>
    );
}

export default tercera;
