import { ErrorMessage, Field, Form, Formik } from "formik";
  import * as yup from "yup";
  import { Header } from "../Header";
  import './styles.css';
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";

  export function Cadastro() {
    const [erro, setError ] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const [emailInUse, setEmailInUse] = useState(false);

    const navigate = useNavigate();
  
    const validationSchema = yup.object().shape({
      firstName: yup.string().required("Este campo é obrigatório"),
      lastName: yup.string().required("Este campo é obrigatório"),
      phone: yup
        .string()
        .matches(/^[0-9]{10,11}$/, "O telefone deve ter 10 ou 11 dígitos")
        .required("Este campo é obrigatório"),
      address: yup.string().required("Este campo é obrigatório"),
      houseNumber: yup
        .string()
        .typeError("O número da casa deve ser um número")
        .required("Este campo é obrigatório"),
      state: yup.string().required("Este campo é obrigatório"),
      city: yup.string().required("Este campo é obrigatório"),
      postalCode: yup
        .string()
        .matches(/^[0-9]{8}$/, "O CEP deve ter 8 dígitos")
        .required("Este campo é obrigatório"),
      email: yup
        .string()
        .email("Não é um email válido")
        .required("Este campo é obrigatório"),
      password: yup
        .string()
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .required("Este campo é obrigatório"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "As senhas não são iguais")
        .required("Este campo é obrigatório"),
    });
    
    async function handleClickRegister(values, { resetForm }) {
      setFormSubmitting(true)
      try {
        await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName: values.firstName, 
            lastName: values.lastName, 
            phone: values.phone, 
            address: values.address, 
            houseNumber: values.houseNumber, 
            state: values.state, 
            city: values.city, 
            postalCode: values.postalCode, 
            email: values.email, 
            password: values.password, 
            confirmpassword: values.confirmPassword         
          })
        }).then(async (res) => {
          const result = await res.json()

          if (res.status === 201) {
            renderSuccess("Cadastro realizado com sucesso!");
            resetForm(); 
            setTimeout(() => {
              navigate("/login"); // ajuste se a sua rota for diferente
            }, 3000); // espera 3 segundos antes de redirecionar
          } else {
            const errorMsg = result.msg || "Erro ao cadastrar";
            // Verifica se o erro envolve email já cadastrado
            if (errorMsg.toLowerCase().includes("email")) {
              setEmailInUse(true);
              renderError("Este email já está em uso. Tente outro.");
            } else {
              renderError(errorMsg);
            }
            setFormSubmitting(false);
          }
          setFormSubmitting(false);
        })
      } catch(error) {
        setFormSubmitting(false);
        renderError("erro ao criar conta, tente novamente mais tarde!")
      }
    }

    function renderError(msg) {
      setError(msg);
      setTimeout(() => {
        setError("")
      }, 3000)
    }

    function renderSuccess(msg) {
      setSuccessMessage(msg);
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }

    return (
      <div>        
        <Header />
        {erro && (
          <div className="popup-error">
            {erro}
          </div>
        )}
        {successMessage && (
          <div className="popup-success">
            {successMessage}
          </div>
        )}
        <div className="container-register">        
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              address: "",
              houseNumber: "",
              state: "",
              city: "",
              postalCode: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleClickRegister}
            validationSchema={validationSchema}
          >
            <Form className="register-form">
            <h1>Cadastro</h1>            
              {/* Primeiros campos lado a lado */}
              <div className="form-row">
                <div className="register-form-group">
                  <Field
                    type="text"
                    name="firstName"
                    className="form-field short-field"
                    placeholder="Primeiro Nome"
                  />
                  <ErrorMessage
                    component="span"
                    name="firstName"
                    className="form-error"
                  />
                </div>

                <div className="register-form-group">
                  <Field
                    type="text"
                    name="lastName"
                    className="form-field short-field"
                    placeholder="Sobrenome"
                  />
                  <ErrorMessage
                    component="span"
                    name="lastName"
                    className="form-error"
                  />
                </div>

                <div className="register-form-group">
                  <Field
                    type="text"
                    name="phone"
                    className="form-field short-field"
                    placeholder="Telefone para contato"
                  />
                  <ErrorMessage
                    component="span"
                    name="phone"
                    className="form-error"
                  />
                </div>
              </div>

              {/* Endereço e número da casa */}
              <div className="form-row">
                <div className="register-form-group">
                  <Field
                    type="text"
                    name="address"
                    className="form-field address-field"
                    placeholder="Endereço"
                  />
                  <ErrorMessage
                    component="span"
                    name="address"
                    className="form-error"
                  />
                </div>

                <div className="register-form-group">
                  <Field
                    type="text"
                    name="houseNumber"
                    className="form-field short-field"
                    placeholder="Nº da Casa"
                  />
                  <ErrorMessage
                    component="span"
                    name="houseNumber"
                    className="form-error"
                  />
                </div>
              </div>

              {/* Estado, cidade e CEP */}
              <div className="form-row">
                <div className="register-form-group">
                  <Field
                    type="text"
                    name="state"
                    className="form-field short-field"
                    placeholder="Estado"
                  />
                  <ErrorMessage
                    component="span"
                    name="state"
                    className="form-error"
                  />
                </div>

                <div className="register-form-group">
                  <Field
                    type="text"
                    name="city"
                    className="form-field short-field"
                    placeholder="Cidade"
                  />
                  <ErrorMessage
                    component="span"
                    name="city"
                    className="form-error"
                  />
                </div>

                <div className="register-form-group">
                  <Field
                    type="text"
                    name="postalCode"
                    className="form-field short-field"
                    placeholder="CEP"
                  />
                  <ErrorMessage
                    component="span"
                    name="postalCode"
                    className="form-error"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="register-form-group">
                <Field
                  type="text"
                  name="email"
                  className={`form-field ${emailInUse ? "email-error" : ""}`}
                  placeholder="Email"
                  onFocus={() => setEmailInUse(false)}
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
                {emailInUse && (
                  <span className="form-error">Este email já está em uso.</span>
                )}
              </div>

              {/* Senha */}
              <div className="register-form-group">
                <Field
                  name="password"
                  type="password"
                  className="form-field"
                  placeholder="Senha"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              {/* Confirmar Senha */}
              <div className="register-form-group">
                <Field
                  name="confirmPassword"
                  type="password"
                  className="form-field"
                  placeholder="Confirme sua Senha"
                />
                <ErrorMessage
                  component="span"
                  name="confirmPassword"
                  className="form-error"
                />
              </div>

              <button 
                className="button-cadastro" 
                type="submit"                
                disabled={isFormSubmitting}             
                >            
                {isFormSubmitting ? "Carregando..." : "Registrar"}
              </button>            
            </Form>
          </Formik>
        </div>
      </div>
    );
  }