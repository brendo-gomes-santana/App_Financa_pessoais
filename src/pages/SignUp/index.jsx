import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { ActivityIndicator } from "react-native";
import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText
} from '../SignIn/styled';

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <Background>
            <Container>
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={t => setNome(t)} />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Seu Email"
                        value={email}
                        onChangeText={t => setEmail(t)} />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Sua Senha"
                        value={senha}
                        onChangeText={t => setSenha(t)} />
                </AreaInput>
                <SubmitButton
                    onPress={() => {
                        if(nome === '' || email === '' || senha === ''){
                            return;
                        }
                        signUp(nome, email, senha)
                    }}
                >

                    {loadingAuth ? (
                        <ActivityIndicator size={20} color='#fff' />
                    ) : (
                        <SubmitText
                            activeOpacity={0.8}
                        >
                            Cadastrar
                        </SubmitText>)}
                </SubmitButton>
            </Container>
        </Background>
    )
}