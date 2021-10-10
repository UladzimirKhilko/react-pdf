import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

export const PdfBody = () => {
    return (
        <Fragment>
            <View style={styles.row}>
                <Text style={styles.body}>
                    ЗАЯВЛЕНИЕ Ваш шедевр готов! Идейные соображения высшего
                    порядка, а также реализация намеченных плановых заданий
                    играет важную роль в формировании форм развития.
                    Повседневная практика показывает, что дальнейшее развитие
                    различных форм деятельности требуют от нас анализа позиций,
                    занимаемых участниками в отношении поставленных задач. С
                    другой стороны дальнейшее развитие различных форм
                    деятельности требуют определения и уточнения модели
                    развития. Повседневная практика показывает, что сложившаяся
                    структура организации требуют определения и уточнения форм
                    развития. Не следует, однако забывать, что реализация
                    намеченных плановых заданий позволяет выполнять важные
                    задания по разработке соответствующий условий активизации.
                    Товарищи! реализация намеченных плановых заданий
                    обеспечивает широкому кругу (специалистов) участие в
                    формировании модели развития. Разнообразный и богатый опыт
                    постоянное информационно-пропагандистское обеспечение нашей
                    деятельности представляет собой интересный эксперимент
                    проверки модели развития. Равным образом дальнейшее развитие
                    различных форм деятельности способствует подготовки и
                    реализации системы обучения кадров, соответствует насущным
                    потребностям. Разнообразный и богатый опыт укрепление и
                    развитие структуры позволяет оценить значение существенных
                    финансовых и административных условий. Товарищи! укрепление
                    и развитие структуры позволяет выполнять важные задания по
                    разработке дальнейших направлений развития. Равным образом
                    дальнейшее развитие различных форм деятельности обеспечивает
                    широкому кругу (специалистов) участие в формировании
                    дальнейших направлений развития.
                </Text>
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