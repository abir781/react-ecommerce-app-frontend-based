import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ImageZoom from './ImageZoom';

const Productdetails = () => {
 const [dat,setdat]= useState({});


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
          
                
                    
           

          <div className=' flex items-center'>
            <button className='bg-black px-4 py-4 text-white font-bold' onClick={()=>{addtocart(dat)}}>ADD TO CART</button>
          </div>

           
                  
              
             
          
            
            
        </div>
    );
};

export default Productdetails;