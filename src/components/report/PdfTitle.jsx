import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export const PdfTitle = ({ title }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        marginTop: 24,
    },
    reportTitle: {
        color: '#61dafb',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});
