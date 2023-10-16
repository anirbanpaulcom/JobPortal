import React from "react";
import { Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon2 from '../assets/svg/Vector.png'


export default function ResetPasswordDonescreen(){

    return(
    <View style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center",paddingHorizontal:25}}>

      <View style={{width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row", height:75, margin:25, marginVertical:5}}>
        <View  style={{width:"10%",padding:10,borderRadius:5,borderColor:"#747688", borderWidth:1,justifyContent:"center", alignItems:"center"}}>
        <Image source={icon2} />
        </View>
        <View style={{width:"90%",paddingRight:20,justifyContent:"center", alignItems:"center" }}>
        <Text style={{color: '#1C2340', fontSize:24, fontWeight:500}}>Reset Password</Text>
        </View>
      </View>
      
      <View style={{width:"100%", height:50}}>
      <Text style={{fontWeight:"400",color:'#1C2340'}}>Please create! a new password</Text>
      </View>

      <View style={{marginVertical:15,width:"100%",}}>
     <Text style={{fontWeight:"400",color:'#1C2340'}}>Password</Text>
     <TextInput placeholder="***********" style={{width:"100%",height:54, borderColor:"#747688",borderWidth:1, borderRadius:10,paddingHorizontal:20,marginTop:5}}/>
     </View>

     <View style={{marginVertical:15,width:"100%",}}>
     <Text style={{fontWeight:"400",color:'#1C2340'}}>Confirm password</Text>
     <TextInput placeholder="***********" style={{width:"100%",height:54, borderColor:"#747688",borderWidth:1, borderRadius:10,paddingHorizontal:20,marginTop:5}}/>
     </View>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:30, width:"100%"}}>
  
        </View>

        <TouchableOpacity style={{width:330, height:55, backgroundColor:"#FF900E",justifyContent:"center", alignItems:"center",borderRadius:15, margin:10 }}>
            <Text style={{fontSize:16, fontWeight:500, color:"white"}}>Send</Text>
        </TouchableOpacity>
        </View>
    );
}
