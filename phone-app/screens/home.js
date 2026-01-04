import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen () {
    return {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffffff'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    chartPlaceholder: {
        height: 200,
        backgroundColor: '#916c7dff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#362525ff'
    },
    hrvText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#350e0eff',
    },
    statusCard: {
        marginTop:20,
        padding: 15,
        backgroundColor: '#eee',
        borderRadius:10
    },
});