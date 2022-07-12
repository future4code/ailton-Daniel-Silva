import React from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"

export const TripDetailsPage = () => {
    const navigate = useNavigate()

    return (
        <div>
        <p> TripDetailsPage </p>
            <button onClick={() => goTo(navigate, "/admin/trips/list")}>Voltar</button>
        </div>
    )
}