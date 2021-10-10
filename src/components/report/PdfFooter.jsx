import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export const PdfFooter = ({ firstName, date }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.name}>{firstName}</Text>
    </View>
);

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        marginTop: 12,
        paddingLeft: 60,
        paddingRight: 80,
    },
    date: {
        fontFamily: 'Roboto',
        fontSize: 12,
        textAlign: 'left',
    },
    name: {
        fontFamily: 'Roboto',
        fontSize: 12,
        textAlign: 'right',
    },
});
