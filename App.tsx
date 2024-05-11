import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import one from "./assets/Images/1.png"
import two from "./assets/Images/2.png"
import three from "./assets/Images/3.png"
import four from "./assets/Images/4.png"
import five from "./assets/Images/5.png"
import six from "./assets/Images/6.png"
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


export default function App() {
  const count = [one,two,three,four,five,six]
  const [no,setNo]=useState(1);
  
  const randomImg = ()=>{
    const randomNo = Math.floor((Math.random()*6))
    setNo(randomNo)
    ReactNativeHapticFeedback.trigger("impactLight", options);
    
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.diceImg}>
      <Image source={count[no]}/>
      </View>
      <TouchableOpacity onPress={randomImg}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Roll the Dice</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:100,
  },
  diceImg:{},
  btnContainer:{
    borderWidth:1,
    borderColor:"#ffffff",
    padding:5,
    borderRadius:5,
  },
  btnText:{
    fontSize:18,
    fontWeight:"bold"
  }
})