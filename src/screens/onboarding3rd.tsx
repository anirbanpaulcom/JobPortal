import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import icon from '../assets/svg/on3.png'

export default function Onboarding3ndcreen(){

    return(
        <View style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center"}}>
      <View style={styles.SvgBox}>
      <Image source={icon} />
      </View>

      <View style={{width:300,alignItems:"center",justifyContent:"center", height:75, margin:25}}>
        <Text style={{color: '#1C2340', fontSize:24, fontWeight:500}}>Help Find the Right Job</Text>
        <Text style={{color: '#1C2340', fontSize:24, fontWeight:500}}> With Your Desire</Text>
      </View>
      
      <View style={{width:300, height:50,alignItems:"center",justifyContent:"center"}}>
      <Text>Jobportal can help you find the right</Text>
      <Text>job with your desire</Text>
      </View>

        <View style={{justifyContent:"space-evenly",flexDirection:"row", alignItems:"center",marginBottom:50, marginTop:20}}>
            <View style={{width:30,height:5,borderRadius:10, backgroundColor:"#6C55FE26",margin:5}}></View>
            <View style={{width:30,height:5,borderRadius:10, backgroundColor:"#6C55FE26",margin:5}}></View>
            <View style={{width:30,height:5,borderRadius:10, backgroundColor:"#FF900E",margin:5}}></View>
        </View>


        <TouchableOpacity style={{width:330, height:55, backgroundColor:"#FF900E",justifyContent:"center", alignItems:"center",borderRadius:15, margin:10 }}>
            <Text style={{fontSize:16, fontWeight:500, color:"white"}}>Get Started</Text>
        </TouchableOpacity>

      </View>
    );
}


const styles = StyleSheet.create({
  SvgBox:{
    width:330,
    height:275,
    borderWidth:10,
    borderRadius:15,
    borderColor:'#6C55FE',
    marginTop:50,
    justifyContent:"center",
    alignItems:"center",
  },

})