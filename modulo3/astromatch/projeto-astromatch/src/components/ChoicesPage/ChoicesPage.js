import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
    HeaderSection1,
    MainContainer,
    HeaderText,
    HeaderButton,
    UserCard
} from "./styled";

export default function ChoicesPage(props) {

    const [user, setUser] = useState({})
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const getProfileToChoose = () => {
            axios
                .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:daniel/person`)
                .then(response => {
                    setUserList([...userList, response.data.profile])
                })

                .catch(error => {
                    console.log(error.message)
                })

        }
        getProfileToChoose(user)
    }, [user])

    console.log(userList)


    return (
        <div>

            <HeaderSection1>
                <HeaderText>AstroMatch</HeaderText>
                <HeaderButton onClick={() => props.goToScreen("pagina match")}>Ver seus matchs!</HeaderButton>
            </HeaderSection1>

            <MainContainer>
                {userList.map(user => {
                    return (
                        <UserCard key={user.id}>
                            {user.name}
                            {user.age}
                            {user.photo && <img src={user.photo}/>}
                            {user.bio}
                        </UserCard>

                    )
                })}
                <button>Like</button>
                <button>Dislike</button>
            </MainContainer>

        </div>
    )
}