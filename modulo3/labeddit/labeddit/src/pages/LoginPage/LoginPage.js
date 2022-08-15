import React from "react";
import useForm from "../../hooks/useForm"
import { LoginForm } from "./styled"

const LoginPage = () => {

    const [form, onChange, clear] = useForm({
        email: "",
        password: ""
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        clear()
    }

    return (
        <div>
            <LoginForm onSubmit={onSubmitForm}>
                <input 
                name={"email"}
                value={form.email}
                onChange={onChange}
                required
                type={"email"}
                placeholder={"E-mail"}
                />
                <input 
                name={"password"}
                value={form.password}
                onChange={onChange}
                required
                type={"password"}
                placeholder={"Senha"} 
                />
                <button>Login</button>
            </LoginForm>
        </div>
    )
}

export default LoginPage;