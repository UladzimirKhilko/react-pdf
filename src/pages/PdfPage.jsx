import React from 'react';
import { useLocation } from 'react-router-dom';

import {
    Document,
    Page,
    Image,
    StyleSheet,
    PDFViewer,
    Font,
} from '@react-pdf/renderer';
import { PdfTitle } from '../components/report/PdfTitle';
import { PdfHeader } from '../components/report/PdfHeader';
import { PdfBody } from '../components/report/PdfBody';
import { PdfFooter } from '../components/report/PdfFooter';
import logo from '../../src/logo.png';

const currDate = new Date().toLocaleDateString();

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const PdfPage = () => {
    let query = useQuery();

    return (
        <>
            <PDFViewer width='1000' height='600' className='app'>
                <Document>
                    <Page size='A4' style={styles.page}>
                        <Image style={styles.logo} src={logo} />
                        <PdfTitle title='заявление' />
                        <PdfHeader
                            firstName={query.get('firstName')}
                            name={query.get('name')}
                            lastName={query.get('lastName')}
                        />
                        <PdfBody txtName={query.get('txtName')} />
                        <PdfFooter
                            firstName={query.get('firstName')}
                            date={currDate}
                        />
                    </Page>
                </Document>
            </PDFViewer>
        </>
    );
};

Font.register({
    family: 'Roboto',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
