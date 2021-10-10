import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export const PdfBody = ({ txtName }) => {
    return (
        <Fragment>
            <View style={styles.row}>
                <Text style={styles.body}>{txtName}</Text>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    row: {
        height: 400,
        width: '100%',
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        width: '100%',
        marginTop: 25,
        textAlign: 'center',
        paddingLeft: 8,
    },
});
