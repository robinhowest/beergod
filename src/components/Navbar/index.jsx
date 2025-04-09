import { BiCart, BiSearch } from "react-icons/bi"
import './styles.css'
import { Header } from "../Header"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../Context/AppContext"
import { FaUserCircle } from "react-icons/fa"

export const Navbar =() => {

  const [ active, setActive ] = useState("wraper");

  const mobileMenu = () => {
    active === 'wraper' ? setActive('wraper wraperActive') : setActive('wraper');
  }
  const navigate = useNavigate();
  const { cart, setSearchQuery, searchQuery } = useContext(AppContext);
  const [userName, setUserName] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const [ searchTerm ] = useState('');
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.firstName) {
      setUserName(user.firstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserName("");
    navigate("/");
  };

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');  // Remove acentos e diacríticos   
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };  

  return (
    <nav className="nav">
      <Header>
        <div className="search-div">
          <input 
            className="search" 
            type="text" 
            placeholder="Pesquisar"  
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          /> 
          <button className="search-lupa" title="Buscar Produto" onClick={handleSearch}>
              <i><BiSearch/></i>
          </button>
        </div>        
        <div className={active}>
          {!userName ? (
            <>
              <Link to='/cadastro'>Quero me cadastrar</Link>
              <Link to='/login'>Login</Link>
            </>
          ) : (
            <div className="user-menu">
              <div className="user-icon" onClick={() => setShowMenu(!showMenu)}>
                <FaUserCircle size={28} />
                <span>{userName}</span>
              </div>
              {showMenu && (
                <div className="dropdown-menu">
                  <button onClick={() => navigate("/perfil")}>Alterar dados</button>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}   
          <div className="cart">
            <Link to='/carrinho'>
              <BiCart/>
              {totalItemsInCart > 0 && (
                <span className="cart-quantity">{totalItemsInCart}</span>
              )}
            </Link>
          </div>          
        </div>
        <div onClick={mobileMenu} className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
      </Header>       
    </nav>
  )
}

