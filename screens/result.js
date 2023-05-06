import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Result = ({navigation,route}) => {
  const {optScore} = route.params //we use route to obtain values passed(in this case from quiz) and params is a variable we named(can be anything) 
  return (
    <View>
      <View>
        <Text style={styles.resTxt}>Your Score is:</Text>
        <Text style={styles.scTxt}>{optScore}</Text>

      </View>
     
      <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    banner:
    {
        height: 300,
        width: 300,
    },
    bannerCont:
    {
        justifyContent:'center',
        alignItems:'center',

    },
    container:
    {
      paddingTop:40,
      paddingHorizontal:20,
      height:'100%',
    },
    button:{
        
      backgroundColor:"#1a759f",
      padding:10,
      marginBottom:10,
      paddingHorizontal:20,
      width:'60%',
      alignSelf:'center',
      marginTop:50,
      
      borderRadius:16,
      
      },
      buttonText:{
        fontSize:24,
        fontWeight:'600',
        color:'white',
        alignSelf:'center',
        
      },
      resTxt:{
        fontSize:30,
        color: 'black',
        alignSelf:'center',
      },
      scTxt:{
        fontSize:90,
        color: 'black',
        alignSelf:'center',
        paddingTop:20,
        fontWeight:900,
      },
})