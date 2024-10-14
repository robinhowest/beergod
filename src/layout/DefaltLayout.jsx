import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../views/Home'

export function DefaltLayout() {
    return(
      <div>        
        <Navbar/> 
        <Home/>       
        <Outlet/>     
      </div>  
    )
}