/*
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Header } from "../Header";
import './styles.css';

export function Cadastro() {
  const handleClickRegister = (values) => console.log(values);

  const validationRegister = yup.object().shape({
    firstName: yup.string().required("Este campo é obrigatório"),
    lastName: yup.string().required("Este campo é obrigatório"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,11}$/, "O telefone deve ter 10 ou 11 dígitos")
      .required("Este campo é obrigatório"),
    address: yup.string().required("Este campo é obrigatório"),
    houseNumber: yup
      .number()
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

  return (
    <div>
      <Header />
      <div className="container-register">
        <h1>Cadastro</h1>
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
          validationSchema={validationRegister}
        >
          <Form className="register-form">
            <div className="register-form-group">
              <Field
                name="firstName"
                className="form-field"
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
                name="lastName"
                className="form-field"
                placeholder="Segundo Nome"
              />
              <ErrorMessage
                component="span"
                name="lastName"
                className="form-error"
              />
            </div>

            <div className="register-form-group">
              <Field
                name="phone"
                className="form-field"
                placeholder="Telefone"
              />
              <ErrorMessage
                component="span"
                name="phone"
                className="form-error"
              />
            </div>

            <div className="register-form-group">
              <Field
                name="address"
                className="form-field"
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
                name="houseNumber"
                className="form-field"
                placeholder="Número da Casa"
              />
              <ErrorMessage
                component="span"
                name="houseNumber"
                className="form-error"
              />
            </div>

            <div className="register-form-group">
              <Field
                name="state"
                className="form-field"
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
                name="city"
                className="form-field"
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
                name="postalCode"
                className="form-field"
                placeholder="CEP"
              />
              <ErrorMessage
                component="span"
                name="postalCode"
                className="form-error"
              />
            </div>

            <div className="register-form-group">
              <Field
                name="email"
                className="form-field"
                placeholder="Email"
              />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>

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

            <button className="button" type="submit">
              Registrar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
*/

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Header } from "../Header";
import './styles.css';

export function Cadastro() {
  const handleClickRegister = (values) => console.log(values);

  const validationRegister = yup.object().shape({
    firstName: yup.string().required("Este campo é obrigatório"),
    lastName: yup.string().required("Este campo é obrigatório"),
    phone: yup
      .string()
      .matches(/^[0-9]{10,11}$/, "O telefone deve ter 10 ou 11 dígitos")
      .required("Este campo é obrigatório"),
    address: yup.string().required("Este campo é obrigatório"),
    houseNumber: yup
      .number()
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

  return (
    <div>
      <Header />
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
          validationSchema={validationRegister}
        >
          <Form className="register-form">
          <h1>Cadastro</h1>
            {/* Primeiros campos lado a lado */}
            <div className="form-row">
              <div className="register-form-group">
                <Field
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
            </div>

            {/* Endereço e número da casa */}
            <div className="form-row">
              <div className="register-form-group">
                <Field
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
                  name="houseNumber"
                  className="form-field short-field"
                  placeholder="Número da Casa"
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
                name="email"
                className="form-field"
                placeholder="Email"
              />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
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

            <button className="button-cadastro" type="submit">
              Registrar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
