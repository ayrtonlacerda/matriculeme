import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Image, 
    ImageBackground,
    TouchableOpacity,
    StatusBar, 
} from 'react-native';
import styles from './loginstyle';


const Login = () => {    
    return (
        <ImageBackground source={require('../../assets/imgs/background.png')} style={styles.background}> 
        <StatusBar backgroundColor="#017EF3" barStyle="light-content" />                            
            <View style={styles.containerLogin}>
                <Image source={require('../../assets/imgs/unblogo.png')} style={styles.image} />
                <Text style={styles.info}>Por favor digite seu usuario e senha</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                </View>                                                                             
            </View>
            <TouchableOpacity style={styles.touch}>
                <View style={styles.button}>
                    <Text style={styles.textbutton}>Entrar</Text>
                </View> 
            </TouchableOpacity>
                                          
        </ImageBackground>    
    );
};

Login.navigationOptions = {
    header: null,
};

export default Login;
