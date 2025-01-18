import { Link } from "react-router-dom"
import './styles.css'
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

export const Header = ({ children }) => { 
  const { setSearchQuery } = useContext(AppContext);  

  const clearSearch = () => {
    setSearchQuery(''); 
  };

  return(    
    <div id='header'>               
      <h2>        
        <Link to='/'>
          <img className="logo-img" onClick={clearSearch} src="../beegod.jpeg"/>          
        </Link>           
      </h2>         
      { children }                           
    </div>     
  )  
}
