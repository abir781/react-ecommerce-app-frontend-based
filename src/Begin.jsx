import React from 'react';
import Navbar from './Navbar';
import Start from './Start';
import { Outlet } from 'react-router';

const Begin = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Begin;