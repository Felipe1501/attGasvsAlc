import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [papinho1, setPapinho1] = useState();
  const [papinho2, setPapinho2] = useState();
  const [result, setResultado] = useState();
  const [resposta, setResposta] = useState();

  function calcular(){
    let calc = (parseFloat (papinho2) / parseFloat(papinho1));
    setResultado(calc.toFixed(2));
    if(calc  <= 0.7){
      setResposta("JOVEM MANCEPO, ABASTEÇA COM ÁLCOOL!!!");
      
    }else{
      setResposta("JOVEM MANCEPO, ABASTEÇA COM GASOLINA!!!");
    }
  }




  function clear(){
    setResultado(null);
    setPapinho1("");
    setPapinho2("");
    setResposta("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>GASOLINA vs ÁLCOOL</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://wp-midia-nova.bidu.com.br/uploads/2017/01/05175045/%C3%A1lcool.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>VALOR GASOLINA:</Text>
        <TextInput
          maxLength={4} 
          style={styles.input}
          keyboardType="numeric"
          value={papinho1}
          placeholder='GASOLINA:'
          onChangeText={(texto)=>setPapinho1(texto)}
      />
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}>VALOR ALCOOL:</Text>
        <TextInput
          maxLength={4} 
          style={styles.input}
          keyboardType="numeric"
          placeholder='ALCOOL:'
          value={papinho2}
          onChangeText={(texto)=>setPapinho2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={calcular}>
            <Text style={styles.textoBotao}>CALCULAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.texto}>A DIFERENÇA ENTRE AS DUAS É: {result}  </Text>
        <Text style={styles.texto}> {resposta} </Text>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={clear}>
            <Text style={styles.textoBotao}>LIMPAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#FE3069',
    fontSize: 30
  },
  textoBloco:{
    fontSize:30,
  },
  input:{
    borderColor:'#E62CBC',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    textAlign: 'center',
    borderRadius: 20
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#E03DFC',
    width:'80%',
    textAlign:'center',
    borderRadius: 20
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  },
  logo:{
    width: 80,
    height: 70,
    margin: 5,
    borderRadius: 20
  }
});