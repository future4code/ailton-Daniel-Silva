import React from "react";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/coordinator"

export const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div>
        <p> LoginPage </p>
        <button onClick={() => goTo(navigate, "/admin/trips/list")}>Ver Viagens</button>
        <button onClick={() => goTo(navigate, "/admin/trips/create")}>Criar Viagem</button>
        <button onClick={() => goTo(navigate, "/")}>Voltar</button>
        </div>
    )
}