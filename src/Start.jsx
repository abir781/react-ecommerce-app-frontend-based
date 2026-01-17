import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Start = () => {
    const [datas,setdata]= useState([]);

 useEffect(() => {
  fetch('/products.json')
    .then(res => res.json())
    .then(prodata =>{

        setdata(prodata);
        console.log(prodata);

    } )
}, []);

    return (
        <div className='bg-[#4350a2] min-h-screen '>

            <div className='max-w-11/12 mx-auto pt-8  '>

           

            <div className='grid grid-cols-4 gap-4 items-stretch'>

                 {
                datas.map(sdata=>{
                    return(


                        <Link to={`/productdetails/${sdata.id}`}>
                                  <div className='max-w-[420px] '>
                        <div className='w-[420px] h-[255px] '>

                            <img src={sdata.images}  className="w-full h-full object-fill"></img>

                        </div>

                        <div className='bg-white pl-4 pt-3 pb-3'>
                            <p className='text-[20px] font-bold mb-2'>{sdata.title}</p>
                            <p className='text-gray-600 font-semibold mb-2'>{sdata.description}</p>
                            <div className=' flex justify-between mr-3'>
                                <p className='font-bold'>{sdata.rating}</p>
                                <p className='font-bold text-gray-600 border-2 border-black p-1'>${sdata.price}</p>

                            </div>
                            
                        </div>
                        
                      
                    </div>
                        </Link>

                  

                    )
                   
                })
            }

            </div>

         

           

            
            
        </div>

        </div>
        
    );
};

export default Start;