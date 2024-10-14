import React, { useContext, useState } from "react";
import "./styles.css";
import { AppContext } from "../../Context/AppContext";
  
export const Product = () => {  
  const products = [
    {
      id: 1,
      name: "Placa Mãe MSI B560M-A PRO",
      price: 498.00,
      description: "Placa Mãe MSI B560M-A PRO, Intel LGA 1200, Intel B560, mATX, DDR4",
      image: "../../img/produtos/imagem1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Placa Mãe Gigabyte X299",
      price: 6498.00,
      description: "Placa Mãe Cpu Intel LGA2066 DDR4 Rgb Fusión Dual M.2 USB",
      image: "../../img/produtos/imagem13.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Placa Mãe Msi Meg Z690",
      price: 4699.00,
      description: "Para Intel 12ª Geração, Socket Lga 1700, DDR5, Atx, Pcie 5.0, Dual 2.5g",
      image: "../../img/produtos/imagem4.jpg",
      quantity: 1,
    },
    {
      id: 4,
      name: "Placa Mãe Asus Rog",
      price: 4699.00,
      description: "Placa Mãe Asus Rog Intel Lga (1200) Micro Atx Ddr4 - Strix Z590-f",
      image: "../../img/produtos/imagem5.jpg",
      quantity: 1,
    },
    {
      id: 5,
      name: "Placa Mãe Asus Rog Strix",
      price: 4299.00,
      description: "Placa Mãe Asus Rog Strix Z590-i Wifi Lga 1200 Ddr4",
      image: "../../img/produtos/imagem6.jpg",
      quantity: 1,
    },
    {
      id: 6,
      name: "Placa Mãe Asus Rog Strix",
      price: 4099.00,
      description: "Placa Mãe Asus Rog Strix Z590-a Gaming Wifi Lga 1200",
      image: "../../img/produtos/imagem7.jpg",
      quantity: 1,
    },
    {
      id: 7,
      name: "Placa Mãe Asus, Rog Strix",
      price: 3900.00,
      description: "Placa Mãe Asus, Rog Strix Z690-e, Gaming Wifi 1700, DDR5",
      image: "../../img/produtos/imagem8.jpg",
      quantity: 1,
    },
    {
      id: 8,
      name: "Placa Mãe Gigabyte X670",
      price: 3900.00,
      description: "Placa Mãe Gigabyte X670 Aorus Elite AX, AMD AM5, ATX, DDR5",
      image: "../../img/produtos/imagem9.jpg",
      quantity: 1,
    },
    {
      id: 9,
      name: "Placa Mãe Z590 Mpg",
      price: 3900.00,
      description: "Intel Core De 11ª / 10ª Geração, Lga 1200",
      image: "../../img/produtos/imagem10.jpg",
      quantity: 1,
    }  
  ]   
  
  const {cart, setCart} = useContext(AppContext);

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };    
    
  return(
    <div className="container">
      {products.map((product) => (
        <div className="container-div" key={product.id}>
          <img src={product.image} alt="" />
          <h2>
            {new Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL' 
            }).format(product.price)}
          </h2>
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          
          <div className="button-div">
            <button className="button-product" type="button" onClick={() => addToCart(product)}>
              Adicionar ao Carrinho              
            </button>
          </div>
        </div>
        ))}                                            
    </div>    
  )  
}      