import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


const FilasPassadasItens = (props) => {
    return(
        <View style={styles.box}><Text style={styles.item}>{props.item.name}</Text></View>
    )

}

const styles = StyleSheet.create({
    item:{
        padding: 20,
        color: '#000',
        fontSize: 25,
        fontFamily: 'Roboto',
        letterSpacing: 1,
        fontWeight: 'bold',
    },
    box:{
        borderTopWidth:1,
    }
})

export default FilasPassadasItens;