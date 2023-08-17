import React from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Background, 
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

    const navigate = useNavigation();

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
                    <Input placeholder='seu email...' />
                </AreaInput>
                <AreaInput>
                    <Input placeholder='Senha...' />
                </AreaInput>

                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigate.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>
        </Background>
    )
}