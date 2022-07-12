import React from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"

export const CreateTripPage = () => {
    const navigate = useNavigate()

    return (
        <div>
        <p> CreateTripPage </p>
        <button onClick={() => goTo(navigate, "/login")}>Voltar</button>
        </div>
    )
}