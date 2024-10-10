import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Navigation

import {NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../App";

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='go to details'
    //   onPress={()=> navigation.navigate("Details",{
    //     productId:"69"
    //   })} first way to navigate
    // onPress={()=> navigation.navigate("Details")} second
    onPress={()=> navigation.push("Details",{
        productId:"69"
    })}
    />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        fontSize:25,
        color:'#000000'
    }
})