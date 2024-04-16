import React from 'react';
import { Image, Text, View } from 'react-native';
import { style_segunda } from '../styles/style_segunda.js';

const Segunda = () => {
    return (
        <View style={style_segunda.divMain}>
            <View style={style_segunda.encabezado}>
                <Text style={style_segunda.title1}>TetraTilt</Text>
            </View>

            <View style={style_segunda.imageContainer}>
                <Text style={style_segunda.textoIzquierda}>Pesado</Text>
                <Image style={style_segunda.balanzaImg} source={require('../imgs/amarilla.png')} />
                <Text style={style_segunda.textoDerecha}>Ligero</Text>
            </View>

            <View style={style_segunda.imageContainer}>
                <Text style={style_segunda.textoIzquierda}>Pesado</Text>
                <Image style={style_segunda.balanzaImg2} source={require('../imgs/negra.png')} />
                <Text style={style_segunda.textoDerecha}>Ligero</Text>
            </View>

            <View style={style_segunda.divFooter}>
                <Text style={style_segunda.textFooter}>Bienvenidos al juego en el que tu cabeza tendrá que trabajar</Text>
            </View>
        </View>
    );
}

export default Segunda;
