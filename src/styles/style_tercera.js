import { StyleSheet } from 'react-native';

export const style_tercera = StyleSheet.create({
    encabezado: {
        backgroundColor: '#9E863A',
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divMain: {
        flex: 1,
        backgroundColor: '#B3AB91',
        alignItems: 'center',
    },
    divFooter: {
        width: '100%',
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 33, 
    },
    textFooter: {
        width: '80%',
        color: '#3C5473',
        fontSize: 14,
        textAlign: 'center',
    },
    title1: {
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 73,
        fontSize: 40,
        fontWeight: 'bold',
    },
    balanzaImg: {
        height: 200,
        borderRadius: 25,
        width: 250,
        resizeMode: 'contain',
        marginTop: 50,
    },
    balanzaImg2: {
        height: 230,
        borderRadius: 25,
        width: 250,
        resizeMode: 'contain',
        marginTop: 25,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    textoIzquierda: {
        marginRight: -18,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#B31412',
    },
    textoDerecha: {
        marginLeft: -18,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#156412',
    },
});
