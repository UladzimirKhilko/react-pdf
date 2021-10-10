import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export const PdfHeader = ({ firstName, name, lastName }) => (
    <>
        <View style={styles.Container}>
            <Text style={styles.label}>Компания</Text>
            <Text style={styles.text}>"Рога и Копыта"</Text>
        </View>
        <View style={styles.NameContainer}>
            <Text style={styles.label}>от: </Text>
            <Text style={styles.text}>
                {' '}
                {firstName} {name} {lastName}
            </Text>
        </View>
    </>
);

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end',
    },
    NameContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 12,
    },
    label: {
        width: 60,
    },
});
