import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import './styles.css';
import { Header } from "../Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [loginSuccessMessage, setLoginSuccessMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Este campo é obrigatório"),
  });

  async function handleClickLogin(values) {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST", // Corrigido
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        setLoginErrorMessage(result.msg || "Erro ao fazer login");
        setTimeout(() => setLoginErrorMessage(""), 3000);
        return;
      }
      
      setLoginSuccessMessage("Login realizado com sucesso!");
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user)); // <- salvar o usuário

      setTimeout(() => {
        setLoginSuccessMessage("");
        navigate("/");
      }, 3000);      

    } catch (error) {
      console.error(error);
      alert("Erro ao tentar fazer login. Tente novamente.");
    }
  }

  return (
    <div>
      <Header />
      {loginSuccessMessage && (
        <div className="popup-success">
          {loginSuccessMessage}
        </div>
      )}

      {loginErrorMessage && (
        <div className="popup-error">
          {loginErrorMessage}
        </div>
      )}

      <div className="container-login">
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }} // Corrigido
          onSubmit={handleClickLogin}
          validationSchema={validationSchema}
        >
          {() => (
            <Form className="login-form">
              <div className="login-form-group">
                <Field
                  name="email"
                  className="form-field"
                  placeholder="Email" // Corrigido
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              <div className="login-form-group">
                <Field
                  type="password"
                  name="password"
                  className="form-field"
                  placeholder="Senha" // Corrigido
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <button className="button-login" type="submit">Login</button>
            </Form>
          )}
        </Formik>
        <span>Não tem cadastro? </span>
        <Link to='/cadastro'>Quero me cadastrar</Link>
      </div>
    </div>
  );
}
