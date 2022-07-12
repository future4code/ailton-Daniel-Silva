import React from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"

export const ListTripPage = () => {
    const navigate = useNavigate()

    return (
        <div>
        <p> ListTripPage </p>
            <button onClick={() => goTo(navigate, "/")}>Voltar</button>
        </div>
    )
}