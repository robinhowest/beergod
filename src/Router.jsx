import { Route, Routes } from "react-router-dom"
import { Product } from "./views/Product"
import { Cadastro } from "./components/Cadastro"
import { Login } from "./components/Login"
import { DefaltLayout } from "./layout/DefaltLayout"
import { Cart } from "./components/Carrinho"
import { History } from "./components/History"
import { CadastrarProd } from "./views/CadastrarProd"

export function Router () {
  return(
    <Routes>
      <Route path="/" element={<DefaltLayout/>}>        
      </Route>       
      <Route path="/login" element={<Login/>}/>   
      <Route path="/cadastro" element={<Cadastro/>}/> 
      <Route path="/carrinho" element={<Cart/>}/> 
      <Route path="/produto" element={<Product/>}/> 
      <Route path="/checkout" element={<History/>}/> 
      <Route path="/cadastrarProd" element={<CadastrarProd/>}/>             
    </Routes>
  )
}