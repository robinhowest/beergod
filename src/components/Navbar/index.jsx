import { BiCart, BiSearch } from "react-icons/bi"
import './styles.css'
import { Header } from "../Header"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AppContext } from "../../Context/AppContext"



export const Navbar =() => {
  const { cart, setSearchQuery } = useContext(AppContext);

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  } 

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  

  return (
    <nav>
      <Header>
        <div className="search-div">
          <input 
            className="search" 
            type="text" 
            placeholder="Pesquisar"  
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          /> 
          <button title="Buscar Produto" onClick={handleSearch}>
              <i><BiSearch/></i>
          </button>
        </div>
        <div className="wraper">             
          <Link to='/cadastro'>Quero me cadastrar</Link>       
          <Link to='/login'>Login</Link>   
          <div className="cart">
            <Link to='/carrinho'>
              <BiCart/>
              {totalItemsInCart > 0 && (
                <span className="cart-quantity">{totalItemsInCart}</span>
              )}
            </Link>
          </div>
        </div>
      </Header>       
    </nav>
  )
}

