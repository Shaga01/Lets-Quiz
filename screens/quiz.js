import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const Quiz = ({navigation}) => {
    const [questions,setQuestions]=useState();
    const [ques,setQues]=useState(0);
    const [opts,setOpts]=useState([]);
    const [score,setScore]=useState(0);
    const getQuiz=async()=>{
        const url='https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res=await fetch(url);
        const data = await res.json(); //jsonify your data from api before running console
         
        setQuestions(data.results);
        setOpts(generateOptionsAndShuffle(data.results[0]));
    }
    useEffect(()=>{
            getQuiz()
    },[]);
    const handleNext=()=>{
        setQues(ques+1)
        setOpts(generateOptionsAndShuffle(questions[ques+1]));
        
    }
    generateOptionsAndShuffle=(_qns)=>{
        const opts=[..._qns.incorrect_answers]
        opts.push(_qns.correct_answer)
        shuffleArray(opts)
        return opts

    }
    const selectHandle=(_options)=>{
        if(_options===questions[ques].correct_answer){
            setScore(score+10)
           
        }
        if(ques!==9){
        setQues(ques+1)
        setOpts(generateOptionsAndShuffle(questions[ques+1]));
        }
        if(ques===9){
            navigation.navigate('Result',{
                optScore:score,})
            }
       
            
    }
    const handleShowRes=()=>{
        navigation.navigate('Result',{
            score:score,})
    }

  return (
    <View style={styles.container}>
        
   {questions&&(<View style={styles.parent}>
    <View style={styles.qns}>
    { <Text style={styles.qnsText}>Q.{decodeURIComponent( questions[ques].question)} </Text> /*unescape coded parts of api strings(gibberish remover) */}
    </View>
    <View style={styles.opt}>
    <TouchableOpacity style={styles.optBttn} onPress={()=>selectHandle(opts[0])}>
        <Text style={styles.optTxt}>{decodeURIComponent(opts[0])}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.optBttn} onPress={()=>selectHandle(opts[1])}>
        <Text style={styles.optTxt}>{decodeURIComponent(opts[1])}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.optBttn} onPress={()=>selectHandle(opts[2])}>
        <Text style={styles.optTxt}>{decodeURIComponent(opts[2])}</Text>
    </TouchableOpacity >
    <TouchableOpacity style={styles.optBttn} onPress={()=>selectHandle(opts[3])}>
        <Text style={styles.optTxt}>{decodeURIComponent(opts[3])}</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.bottom}>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Home</Text>
    </TouchableOpacity>
    {ques!==9 && <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>}
    {ques===9 &&  <TouchableOpacity onPress={handleShowRes} style={styles.button}>
        <Text style={styles.buttonText}>Show Result</Text>
    </TouchableOpacity> }
    </View>
    
    </View>)
    }
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:
    {
      paddingTop:40,
      paddingHorizontal:20,
      height:'100%',
    },
    parent:{
        height:'100%',
    },
    qns:{
        marginVertical:16,
    },
    opt:{
        marginVertical:16,
        flex:1,
    },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:'space-around',
        flexDirection:'row',
    },
    button:{
        
        backgroundColor:"#1a759f",
        padding:10,
        marginBottom:10,
        paddingHorizontal:20,
        
        borderRadius:16,
        
        },
        buttonText:{
          fontSize:24,
          fontWeight:'600',
          color:'white',
          alignSelf:'center',
          
        },
        qnsText:{
            fontSize:30,
            color: 'black',
            alignSelf:'center',
        },
        optTxt:{
            fontStyle:'italic',
            fontSize: 20,
            paddingLeft:30,
            fontWeight:'400',
            color:'black',
        },
        optBttn:{
            padding:12,
            marginVertical:6,
            backgroundColor:'#168aad',
            borderRadius: 16,
        },
})