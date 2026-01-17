import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cartpro,setCartItems]= useState([]);
      useEffect(() => {
         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
         setCartItems(storedCart);
  }, []);
    return (
        <div>
            {
                cartpro.map((singlep)=>{
                    return(
                        <div>
                            <p>{singlep.title}</p>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Cart;