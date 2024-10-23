  import React, { useContext, useEffect } from 'react';
  import { Header } from '../Header';
  import { AppContext } from '../../Context/AppContext';
  import './styles.css'
  import { Sumary } from '../Sumary';
  import { BiTrash } from 'react-icons/bi';
  import { useNavigate } from 'react-router-dom';

  export const Cart = () => { 
    
    const { cart, setCart } = useContext(AppContext);

    const navigate = useNavigate();

    const handleCheckout = () => {
      console.log("funcao checout",handleCheckout)
      const purchaseTime = new Date().toLocaleString();
      setCart([]);
      localStorage.removeItem('cart');
      navigate('/checkout', {
        state: {
          cartTotal,
          purchasedItems: cart,
          purchaseTime,
        },    
    });  
  };

    const handleDec = (itemId) => {
      const updatedCart = cart.map((item) => {        
        if (item.id === itemId) {
          const updatedQuantity = Math.max(1, item.quantity - 1);
          return { ...item, quantity: updatedQuantity };        
        }
        return item;      
      });
      setCart(updatedCart);  
      localStorage.setItem('cart', JSON.stringify(updatedCart));  
    };  
    
    const handleAdd = (itemId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          const updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemove = (itemId) => {
      const updatedCart = cart.filter((item) => item.id !== itemId);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }; 

    const getTotal = () => {
      let sum =0    
      for(let item of cart) {
        sum += item.price * item.quantity;
      }
      return sum;
    }
    
    const cartTotal = getTotal();

    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
    }, []);

    return (
      <div>
        <Header />
        <h1 className="titledefalt">Carrinho</h1>
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>            
                  <th>Total</th>                   
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td ><img src={item.image} alt="" />
                    <td>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(item.price)}
                    </td>
                    <td>
                    <div className='qty'>
                      <button>
                        <i className='bx bx-minus' onClick={() => handleDec(item.id)}>-</i>
                      </button>          
                      <span>{item.quantity}</span>
                      <button>
                        <i className='bx bx-plus' onClick={() => handleAdd(item.id)}>+</i>
                      </button>
                    </div>
                    </td>
                    <td>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(item.price * item.quantity)}
                    </td>
                    <td>
                      <button className='remove' onClick={() => handleRemove(item.id)}>
                        <i className='bx bx-x'><BiTrash/></i>
                      </button>
                    </td>  
                    </td>
                    <td>{item.name}</td>                                                     
                  </tr>
                ))}
                {cart.length === 0 && 
                <tr>
                  <h2>Seu carrinho esta vazio</h2>
                </tr>}              
              </tbody>
            </table>
          </section>
          <aside>
          <Sumary total={cartTotal} onCheckout={handleCheckout} />
          </aside>
        </div>
      </div>
    );
  };

