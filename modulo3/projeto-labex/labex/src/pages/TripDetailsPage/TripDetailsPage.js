import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import axios from 'axios'

export const TripDetailsPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            navigate("/login")
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NAOp5L3Wuunexq9SbUso`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log("Deu ruim: ", error.response)
            })
    }, [])

    return (
        <div>
            <p> TripDetailsPage </p>
            <button onClick={() => goTo(navigate, "/admin/trips/list")}>Voltar</button>
        </div>
    )
}