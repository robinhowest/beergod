    import React from 'react';
    import { useLocation } from 'react-router-dom';
    import { Header } from '../Header';
    import './styles.css'

    export const History = () => { 
      const location = useLocation();
      const { cartTotal, purchasedItems, purchaseTime } = location.state || { cartTotal: 0, purchasedItems: [], purchaseTime: null};

      if (!purchasedItems) {
        // Trate o caso em que purchasedItems é undefined ou null
        return <div>Nenhum item comprado.</div>;
      }
      return (        
        <div>
          <Header/>
          <h1 className='h1-history'>Compra Concluída</h1>
          <p className='p-history'>Data da Compra: {purchaseTime}</p>

          <h2>Itens Comprados:</h2>
          {purchasedItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}

          <p>Valor Total: {cartTotal}</p>
        </div>
      );
    }