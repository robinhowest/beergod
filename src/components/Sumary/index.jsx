import React from 'react';
import './style.css'

export const Sumary = ({total, onCheckout}) => {
  return (
    <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                }).format(total)}
            </span>
          </div> 
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>         
        </div>
        <footer>
          <span>Total</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(total)}
          </span>
        </footer>
      </div>
      <button className='buttonSumary' onClick={onCheckout}>Finalizar Compra</button>  
    </>
  );
};

