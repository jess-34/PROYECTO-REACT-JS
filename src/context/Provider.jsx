import Contexto from "./contexto",
import { useReducer } from "react",
import MiReducer from "./MiReducer",
import type from "./type";

const inicio = {} => {
   const user = localStorage.getItem {"usuario"};
   return {
       logged:!!user,
       usuario:user
   }
}

const Provider = ({childrenÇ}) =>{
    const [logeado,dispatch] = useReducer(MiReducer,{},inicio);
    const login =(sesion) => {
        const action = {
            type:type.login,
            playload:sesion
        }
        localStorage.setItem('usuario',JSON.stringify(sesion));
        dispatch(action);
    }
    const cerrar_sesion = () =>{
        const action ={
            type:type.loggout,
            playload
        }
        localStorage.removeItem('usuario');
        dispatch(action);
    }
    return(
        <Contexto.Provider value={{...logeado,login,cerrar_sesion}}>
        (children)
        </Contexto.Provider Provider>
    )
}
export  defalt  Provider;