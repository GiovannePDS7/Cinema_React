import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import InputLogin from "./componentes/InputLogin";
import Checkbox from "expo-checkbox";
import Logo from '../../assets/imgs/logos/Logo2.png';

const Screen1 = ({navigation}) => {

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSenhaFocused, setIsSenhaFocused] = useState(false);
  const [isEmailValue, setEmailValue] = useState('');
  const [isSenhaValue, setSenhaValue] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleEmailFocus = () => {
      setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
      setIsEmailFocused(false);
  };

  const handleSenhaFocus = () => {
      setIsSenhaFocused(true);
  };

  const handleSenhaBlur = () => {
      setIsSenhaFocused(false);
  };

  const [erros, setErros] = useState({});

  const validarCampos = () => {
      const novosErros = {};

      if (!isEmailValue) {
          novosErros.isEmailValue = 'Campo obrigatório';
      }

      if (!isSenhaValue) {
          novosErros.isSenhaValue = 'Campo obrigatório';
      }
      return novosErros;
  }

  const handleLogin = () => {
      const novosErros = validarCampos();

      if (Object.keys(novosErros).length === 0) {
          navigation.navigate('Screen2')
      } else {
          setErros(novosErros);
      }
  };
  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <View>
                    <Text style={[styles.txtInputEmail, isEmailValue != '' && { display: 'flex' }]}>Email ou usuário:</Text>
                    <View style={[styles.inputEmail, isEmailFocused && styles.focusedBorder, isEmailValue != '' && styles.ValueBorder]}>
                        <TextInput
                            onChangeText={setEmailValue}
                            value={isEmailValue}
                            style={styles.email}
                            onFocus={handleEmailFocus}
                            onBlur={handleEmailBlur}
                            placeholderTextColor="#fff"
                            placeholder="Email ou usuário" />
                        {erros.isEmailValue && <Text style={styles.erro}>{erros.isEmailValue}</Text>}
                    </View>
                </View>
                <View>
                    <Text style={[styles.txtInputSenha, isSenhaValue != '' && { display: 'flex' }]}>Senha:</Text>
                    <View style={[styles.inputSenha, isSenhaFocused && styles.focusedBorder, isSenhaValue != '' && styles.ValueBorder, isSenhaValue != '' && { marginTop: 0 }]}>
                        <TextInput
                            onChangeText={setSenhaValue}
                            value={isSenhaValue}
                            secureTextEntry={true}
                            textContentType='password'
                            style={styles.senha}
                            onFocus={handleSenhaFocus}
                            onBlur={handleSenhaBlur}
                            placeholderTextColor="#fff"
                            placeholder="Senha" />
                        {erros.isSenhaValue && <Text style={styles.erro}>{erros.isSenhaValue}</Text>}
                    </View>
                </View>
            </View>
            <View style={styles.containerCheckbox}>
                <View style={styles.littleContainerCheckbox}>
                    <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                    <Text style={styles.textCheckbox}>Manter login</Text>
                </View>
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity onPress={handleLogin} style={styles.Button}><Text style={styles.TextBtn}>Entrar</Text></TouchableOpacity>
            </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  littleContainerCheckbox: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: '',
    height: 40

},
textCheckbox: {
    paddingLeft: 5,
    fontSize: 17,
    color: '#fff'
},
containerCheckbox: {
    width: '100%',
    height: 40,
    top: 30,
},
checkbox: {
    marginLeft: 40
},
containerInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
},
erro: {
    color: '#f00',
    marginTop: 5,
},
container: {
    width: '100%',
    top: 60
},
txtInputEmail: {
    color: '#fff',
    fontSize: 16,
    display: 'none',

},
txtInputSenha: {
    marginTop: 30,
    color: '#fff',
    fontSize: 16,
    display: 'none'
},
containerBtn: {
    backgroundColor: '#fff',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45%',
    marginTop: '20%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: '100%'
},
TextBtn: {
    fontSize: 20,
    color: "#fff",
},
Button: {
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000220",
    width: 165,
    height: 60,

},
email: {
    color: "#fff",
    fontSize: 18,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
},
inputEmail: {
    borderBottomColor: "#fff",
    borderTopColor: "#000220",
    borderRightColor: "#000220",
    borderLeftColor: "#000220",
    borderWidth: 2,
    width: "80%",
    height: 55,
    paddingHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
},
senha: {
    color: "#fff",
    fontSize: 18,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
},
inputSenha: {
    marginTop: 40,
    borderBottomColor: "#fff",
    borderTopColor: "#000220",
    borderRightColor: "#000220",
    borderLeftColor: "#000220",
    borderWidth: 2,
    width: "80%",
    height: 55,
    paddingHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
},
focusedBorder: {
    borderBottomColor: "#d82020",
},
ValueBorder: {
    borderBottomColor: "#18ec10",
},
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000220",
    flex: 1,
    alignItems: "center",
  },
  Login: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  littleContainer: {
    display: "flex",
    width: "100%",
    height: 140,
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginTop: 80
  },
});

export default Screen1;
