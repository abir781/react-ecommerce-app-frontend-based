import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ImageZoom from './ImageZoom';
import { FaHeart } from "react-icons/fa";

const Productdetails = () => {
 const [dat,setdat]= useState({});
 const [run,setrun]= useState(false);

const brogotmoustache = (animal) => {
  setrun(prev => {
    const next = !prev;

    if (next) {
      // Add only once
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const exists = wishlist.some(item => item.id === animal.id);
      if(!exists){
        localStorage.setItem("wishlist", JSON.stringify([...wishlist, animal]));
      }
    } else {
      // Remove
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const updated = wishlist.filter(item => item.id !== animal.id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }

    return next;
  });
};



 const addtocart =(jontu)=>{
    console.log(jontu);
     // 1️⃣ get existing cart
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  // 2️⃣ add new product using spread operator
  const updatedCart = [...existingCart, jontu];

  // 3️⃣ save back
  localStorage.setItem("cart", JSON.stringify(updatedCart));
 }

   const { id } = useParams();

   console.log(id);

 useEffect(() => {
  fetch('/products.json')
    .then(res => res.json())
    .then(prodata =>{

        const singleprodat= prodata.find(pro=>pro.id ==id);

        setdat(singleprodat);
        console.log(singleprodat);

    } )
}, [id]);
    return (
        <div className='w-7/12 mx-auto mt-[80px] flex'>


            <div>
                   <div className="w-[500px] h-[500px]  ">
                  
                  <ImageZoom src={dat.images?.[0] } />

              </div>


          <div className='pl-[80px] pt-[40px]'>

             <p className='font-bold text-[24px]'>{dat.title}</p>
             <p className='font-bold text-[24px]'>{dat.price}</p>
             <p className='font-bold text-[24px]'>{dat.description}</p>
             <p className='font-bold text-[24px]'>{dat.rating}</p>
               <p className='font-bold text-[24px]'>{dat.sizes?.map(size => (
  <span className='gap-2' key={size}>{size},</span>
))}</p>


          </div>

            </div>
          
                
                    
           

          <div className=' flex items-center gap-5'>
            <button className='bg-black px-4 py-4 text-white font-bold' onClick={()=>{addtocart(dat)}}>ADD TO CART</button>
            <button   onClick={()=>{brogotmoustache(dat)}}>
              {
                run ? (
                  <FaHeart size={30} className='text-red-500' />

                ):(
                   <FaHeart size={30} />
                )
              }
              </button>
          </div>

           
                  
              
             
          
            
            
        </div>
    );
};

export default Productdetails;