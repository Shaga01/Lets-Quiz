import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.bannerCont}>
        
        <Image source={{uri:'https://img.freepik.com/free-vector/background-people-television-contest_23-2147595530.jpg?size=626&ext=jpg&ga=GA1.1.1191134745.1683215058&semt=robertav1_2_sidr'}}
        style={styles.banner}/>

      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.buttons}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home

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
        flex:1,

    },
    container:
    {
      paddingTop:40,
      paddingHorizontal:20,
      height:'100%',
    },
    buttons:{
    width :'100%',
    backgroundColor:"#1a759f",
    padding:15,
    marginBottom:20,
    
    borderRadius:16,
    
    },
    text:{
      fontSize:24,
      fontWeight:'600',
      color:'white',
      alignSelf:'center',
      
    }
})