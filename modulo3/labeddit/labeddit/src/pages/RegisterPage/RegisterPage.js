import React from "react";
import useForm from "../../hooks/useForm"
import { LoginForm } from "./styled"

const RegisterPage = () => {

    const [form, onChange, clear] = useForm({
        username: "",
        email: "",
        password: ""
    }) 

    const onSubmitRegisterForm = (event) => {
        event.preventDefault()
        clear()
    }

    return (
        <div>
            <LoginForm>
                <input
                name={"username"}
                value={form.username}
                onChange={onChange}
                required
                type={"text"}
                placeholder={"Usuário"}
                />
                <input
                name={"email"}
                value={form.email}
                onChange={onChange}
                required
                type={"email"}
                placeholder={"E-mail"} />
                <input 
                name={"password"}
                value={form.password}
                onChange={onChange}
                required
                type={"password"}
                placeholder={"Senha"}
                pattern={"^.{8,30}"}
                title={"A senha deve ter no mínimo 8 e no máximo 30 caracteres"}
                />
                <button>Enviar Cadastro</button>
            </LoginForm>
        </div>
    )
}

export default RegisterPage;