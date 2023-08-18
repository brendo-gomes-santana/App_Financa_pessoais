import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/Auth";

function Routes(){

    const { signed, loading } = useContext(AuthContext)

    if(loading){
        return(
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator size={80} color='#000'/>
            </View>
        )
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;