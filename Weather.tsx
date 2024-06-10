import React from "react";
import propTypes from 'prop-types'
import { Alert, StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Сиди дома',
        subtitle: 'Ты видишь что на улице?'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Возьми зонтик',
        subtitle: 'Возможно скоро дождь усилится '
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046','#1CB5E0'],
        title: 'На улице дождь',
        subtitle: 'А значит скоро будет радуга!'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'На улице снежок!',
        subtitle: 'Одевайтесь потеплее, лепите снеговиков'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'Пыльно',
        subtitle: 'Лучше закройте окна'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'На улице смог :(',
        subtitle: 'Не советую выходить без необходимости'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'На улице снежок!',
        subtitle: 'Одевайтесь потеплее, лепите снеговиков'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Ни черта не видно в тумане',
        subtitle: 'Зато как в Сайлент-Хилле :)'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Погода супер :)',
        subtitle: 'Иди гулять, хватит сидеть дома!'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Облака',
        subtitle: 'Белогривые лошадки'
    },
}


export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.weatherIcon}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.weatherTextStyle}>{temp}°</Text>
            </View>
            <View style={{...styles.weatherDescription, ...styles.weatherDescriptionTextContainer}}>
                <Text style={styles.weatherTitle}>{weatherOptions[condition].title}</Text>
                <Text style={styles.weatherSubtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm','Drizzle', 'Rain', 'Snow', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall', 'Tornado', 'Clear', 'Clouds']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    weatherIcon: {
        paddingTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    weatherTextStyle: {
        fontSize: 42,
        color: '#fff'
    },
    weatherDescription: {
        flex: 1,
        justifyContent: 'flex-start',
        marginVertical: 15
    },
    weatherTitle: {
        color: "#fff",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    weatherSubtitle: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 18
    },
    weatherDescriptionTextContainer: {
        paddingHorizontal: 30,
        alignItems: "flex-start"
    }
})