import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/Auth";
import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from "./styled";

export default function SignIn() {
    const { SignIn, loadingAuth } = useContext(AuthContext)
    const navigate = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin() {
        if (email === '' || senha === '') {
            return;
        }

        SignIn(email, senha)
    }
    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' && 'padding'}
                enabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />
                <AreaInput>
                    <Input placeholder='seu email...'
                        value={email}
                        onChangeText={t => setEmail(t)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input placeholder='Senha...'
                        value={senha}
                        onChangeText={t => setSenha(t)} />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#fff' />
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }

                </SubmitButton>

                <Link onPress={() => navigate.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>
        </Background>
    )
}