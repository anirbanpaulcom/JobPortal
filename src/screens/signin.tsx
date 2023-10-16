import React from "react";
import { Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon1 from '../assets/svg/jobicon.png'
import icon2 from '../assets/svg/Vector.png'
import icon3 from '../assets/svg/google.png';
import icon4 from '../assets/svg/fb.png';
import icon5 from '../assets/svg/mail.png';

export default function Signinscreen(){

    return(
        <View style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center",paddingHorizontal:25}}>

      <View style={{width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row", height:75, margin:25,marginTop:5}}>
        <View  style={{width:"10%",padding:10,borderRadius:5,borderColor:"#747688", borderWidth:1,justifyContent:"center", alignItems:"center"}}>
        <Image source={icon2} />
        </View>
        <View style={{width:"90%",paddingRight:20,justifyContent:"center", alignItems:"center" }}>
        <Text style={{color: '#1C2340', fontSize:24, fontWeight:500}}>Sign In</Text>
        </View>
      </View>
      
      <View style={{width:"100%", height:50}}>
      <Image source={icon1} />
      <Text>Give credential to sign in your account</Text>
        </View>
     <View style={{marginVertical:15,marginTop:35,width:"100%",}}>
     <Text>Email</Text>
     <TextInput placeholder="abc@email.com" style={{width:"100%",height:54, borderColor:"#747688",borderWidth:1, borderRadius:10,paddingHorizontal:20, marginTop:5}}/>
     </View>
     
     <View style={{marginVertical:15,width:"100%",}}>
     <Text>Password</Text>
     <TextInput placeholder="***********" style={{width:"100%",height:54, borderColor:"#747688",borderWidth:1, borderRadius:10,paddingHorizontal:20,marginTop:5}}/>
     </View>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:30, width:"100%"}}>

        <View style={{width:"50%", alignItems:"flex-start"}}>
               <Switch/>
                </View>
                <TouchableOpacity
                    style={{width:"50%", alignItems:"flex-end"}}
                >
                    <Text style={{fontWeight:400,color:'#5669FF'}}>Forgot Password?</Text>
                </TouchableOpacity>
        </View>

        <TouchableOpacity style={{width:330, height:55, backgroundColor:"#FF900E",justifyContent:"center", alignItems:"center",borderRadius:15, margin:10 }}>
            <Text style={{fontSize:16, fontWeight:500, color:"white"}}>Sign in</Text>
        </TouchableOpacity>

        <View style={{width:"100%", flexDirection:"row", justifyContent:"center", alignItems:"center", marginVertical:30}}>
            <View style={{width:100, height:1, backgroundColor:"#747688"}}></View>
            <Text style={{marginHorizontal:10}}>Or continue with</Text>
            <View style={{width:100, height:1, backgroundColor:"#747688"}}></View>
        </View>

        <View style={{flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"space-evenly"}}>
          <Image source={icon3} />
          <Image source={icon4} />
          <Image source={icon5} />
        </View>


        <View style={{marginTop:50, justifyContent:"center", flexDirection:"row"}}>

                <Text >Don’t have an account?  </Text>
                <TouchableOpacity >
                    <Text style={{fontSize:15,fontWeight:400,color:'#5669FF'}}>Sign up</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
}


