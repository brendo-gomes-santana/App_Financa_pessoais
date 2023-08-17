import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText
} from '../SignIn/styled';

export default function SignUp() {

    const { signUp } = useContext(AuthContext);

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
                        onChangeText={ t => setEmail(t)}/>
                </AreaInput>
                <AreaInput>
                    <Input 
                        placeholder="Sua Senha" 
                        value={senha}
                        onChangeText={ t => setSenha(t)}/>
                </AreaInput>
                <SubmitButton
                    onPress={() => signUp(nome, email, senha)}
                >
                    <SubmitText
                        activeOpacity={0.8}
                    >Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    )
}