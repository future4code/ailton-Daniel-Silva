import React from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"

export const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
        <p> AdminHomePage </p>
        <button onClick={() => goTo(navigate, "/admin/trips/:id")}>Ver detalhes</button>
        <button onClick={() => goTo(navigate, "/login")}>Voltar</button>
        </div>
    )
}