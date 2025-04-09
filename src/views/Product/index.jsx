import React, { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../Context/AppContext";
  
export const Product = () => {  

  const { setCart, searchQuery, setSearchQuery } = useContext(AppContext);

  const products = [
    {
      id: 1,
      name: "Placa Mãe MSI B560M-A PRO",
      price: 498.00,
      description: "Placa Mãe MSI B560M-A PRO, Intel LGA 1200, Intel B560, mATX, DDR4",
      image: "../../produtos/imagem1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Placa Mãe Gigabyte X299",
      price: 6498.00,
      description: "Placa Mãe Cpu Intel LGA2066 DDR4 Rgb Fusión Dual M.2 USB",
      image: "../../produtos/imagem13.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Placa Mãe Msi Meg Z690",
      price: 4699.00,
      description: "Para Intel 12ª Geração, Socket Lga 1700, DDR5, Atx, Pcie 5.0, Dual 2.5g",
      image: "../../produtos/imagem4.jpg",
      quantity: 1,
    },
    {
      id: 4,
      name: "Placa Mãe Asus Rog",
      price: 4699.00,
      description: "Placa Mãe Asus Rog Intel Lga (1200) Micro Atx Ddr4 - Strix Z590-f",
      image: "../../produtos/imagem5.jpg",
      quantity: 1,
    },
    {
      id: 5,
      name: "Placa Mãe Asus Rog Strix",
      price: 4299.00,
      description: "Placa Mãe Asus Rog Strix Z590-i Wifi Lga 1200 Ddr4",
      image: "../../produtos/imagem6.jpg",
      quantity: 1,
    },
    {
      id: 6,
      name: "Placa Mãe Asus Rog Strix",
      price: 4099.00,
      description: "Placa Mãe Asus Rog Strix Z590-a Gaming Wifi Lga 1200",
      image: "../../produtos/imagem7.jpg",
      quantity: 1,
    },
    {
      id: 7,
      name: "Placa Mãe Asus, Rog Strix",
      price: 3900.00,
      description: "Placa Mãe Asus, Rog Strix Z690-e, Gaming Wifi 1700, DDR5",
      image: "../../produtos/imagem8.jpg",
      quantity: 1,
    },
    {
      id: 8,
      name: "Placa Mãe Gigabyte X670",
      price: 3900.00,
      description: "Placa Mãe Gigabyte X670 Aorus Elite AX, AMD AM5, ATX, DDR5",
      image: "../../produtos/imagem9.jpg",
      quantity: 1,
    },
    {
      id: 9,
      name: "Placa Mãe Z590 Mpg",
      price: 3900.00,
      description: "Intel Core De 11ª / 10ª Geração, Lga 1200",
      image: "../../produtos/imagem10.jpg",
      quantity: 1,
    }  
  ]
  
  const filteredProducts = products.filter(product => {
    const normalizedSearchQuery = searchQuery
      .normalize('NFD')  // Normaliza para uma forma canônica de decomposição
      .replace(/[\u0300-\u036f]/g, ''); // Remove os diacríticos (acentos, til, etc.)
  
    const normalizedProductName = product.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  
    const normalizedProductDescription = product.description
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  
    return normalizedProductName.toLowerCase().includes(normalizedSearchQuery.toLowerCase()) ||
      normalizedProductDescription.toLowerCase().includes(normalizedSearchQuery.toLowerCase());
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
  
      if (existingIndex !== -1) {
        const updatedCart = prevCart.map((item, index) => 
          index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };
  
  const clearSearch = () => {
    setSearchQuery(''); 
  };  
          
  return (
    <div className="container">      
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
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
        ))
      ) : (
        <div className="search-not">
          <p className="messenger-search">Nenhum produto encontrado</p>
          <button className="button-return" onClick={clearSearch} >Retornar</button>
        </div>
      )}      
    </div>
  );
};