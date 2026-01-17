import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='py-5 bg-amber-500 flex justify-center'>
            <ul className='flex gap-5 text-white font-bold '>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/cart'}><li>Cart</li></Link>
            </ul>
            
        </div>
    );
};

export default Navbar;