import { Link } from "react-router-dom"
import './styles.css'

export const Header = ({ children }) => {   
  return(    
    <div id='header'>               
      <h2>
        <button onClick={() => location.reload()}>
        <Link to='/'>
          <img className="logo-img" src="../beegod.jpeg"/>          
        </Link> 
        </button>        
      </h2>         
      { children }                           
    </div>     
  )  
}
