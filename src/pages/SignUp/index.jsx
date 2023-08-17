import React from "react";

import { Background, 
            Container, 
            AreaInput, 
            Input, 
            SubmitButton, 
            SubmitText 
        } from '../SignIn/styled';

export default function SignUp() {
    return (
        <Background>
            <Container>
                <AreaInput>
                    <Input placeholder="Nome"/>
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Seu Email"/>
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Sua Senha"/>
                </AreaInput>
                <SubmitButton>
                    <SubmitText
                        activeOpacity={0.8}
                    >Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
        </Background>
    )
}