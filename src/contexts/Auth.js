import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

import api from '../services/api';
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const navigation = useNavigation();

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadinAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const token = await AsyncStorage.getItem("@user");
            if(!token){
                setUser(null)
                return;
            }

            try{
                const r = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                setUser(r.data);
                api.defaults.headers['Authorization'] = `Bearer ${token}`;
                setLoading(false)
            }catch(err){
                console.log(err);
                setUser(null)
            }
        })()
    },[])

    async function signUp(nome, email, senha) {
        setLoadinAuth(true);
        try {
            await api.post('/users', {
                name: nome,
                password: senha,
                email
            })
            setLoadinAuth(false);
            navigation.goBack()
        } catch (err) {
            setLoadinAuth(false);
            console.log(err)
        }
    }

    async function SignIn(email, senha) {
        setLoadinAuth(true);
        try {
            const r = await api.post('/login', {
                email,
                password: senha
            })
            const { token } = r.data
            await AsyncStorage.setItem('@user', token);
            setLoadinAuth(false);
            setUser(r.data);
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
        } catch (err) {
            setLoadinAuth(false)
            console.log(err)
        }
    }
    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signUp,
                SignIn,
                loadingAuth,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}