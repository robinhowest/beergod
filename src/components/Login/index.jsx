import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import './styles.css'
import { Header } from "../Header";
import { Link } from "react-router-dom";

export function Login() { 
    
    const handleClickLogin = (values) => console.log(values);
    const validationLogin = yup.object().shape({
        email: yup
        .string()
        .email("Nao é um email")
        .required("este campo é obrigatorio"),
        password: yup
        .string()
        .min(8, "Asenha deve ter no 8 caracteres")
        .required("este campo é obeigatorio")
    })
    
    return(     
      <div>
        <Header/> 
        <div className="container-login">     
          <h1>Login</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleClickLogin}  
            validationSchema={validationLogin}
          >

          <Form className="login-form">
            <div className="login-form-group">
              <Field name="email" className="form-field"
              placeHolder="Email" />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error"  
              />  
            </div>

            <div className="login-form-group">
              <Field name="password" className="form-field"
              placeHolder="Senha" />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error"  
              />  
            </div>  
            <button className="button-login" type="submit">login</button>  
          </Form>
          
          </Formik>   
          <span>Nao tem cadastro? </span>  
          <Link to='/cadastro'>Quero me cadastrar</Link>                
        </div>
      </div>
    ) 
  }