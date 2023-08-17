import { createContext } from "react";
import api from '../services/api';
import { useNavigation } from "@react-navigation/native";
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const navigation = useNavigation();

    async function signUp(nome, email, senha){
        try{
            const r = await api.post('/users', {
                name: nome,
                password: senha,
                email
            })
            navigation.goBack()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider 
        value={{
            signUp
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}