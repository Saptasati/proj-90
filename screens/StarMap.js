import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';



export default class StarMapScreen extends Component {
    constructor() {
        super();
            this.state = {
                longitude:'',
                latitude:''
            }
        }
    render() {
        const {longitude, latitude} = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}.102493&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
        return (
            <View style={styles.container}>
                <Text style= {styles.titleText}>StarMap Screen!</Text>

                <WebView 
                scalesPageToFit={true}
                source={{uri:path}}
                style={{marginTop:20, marginBottom:20}}
                />


                <TextInput
                style={styles.inputStyle}
                placeholder="Enter your longitude"
                placeholderTextColor = "black"
                onChangeText={(text)=> {
                    this.setState({
                        longitude:text
                    })
                }}
                />

                <TextInput
                style={styles.inputStyle}
                placeholder="Enter your latitude"
                placeholderTextColor = "black"
                onChangeText={(text)=> {
                    this.setState({
                        latitude:text
                    })
                }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'black',
        width: 200
    }
})
