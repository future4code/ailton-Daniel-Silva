import React from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import { useEffect } from "react";

export const CreateTripPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            navigate("/login")
        }
    }, [])

    return (
        <div>
            <p> CreateTripPage </p>
            <button onClick={() => goTo(navigate, "/admin/trips/list")}>Voltar</button>
        </div>
    )
}