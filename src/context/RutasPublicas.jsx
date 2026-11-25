import Contexo from "..7context/Contexto";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const RutasPublicas = ({children}) => {
    const (usuario) = useContext(Contexto);
    return (!usuario!)
}