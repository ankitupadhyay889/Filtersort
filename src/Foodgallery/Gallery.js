import React, { useState } from 'react';
import Menu from "./Main"
import Mainmenu from './Mainmenu';

const Gallery = () => {

    const [item, setitem] = useState(Menu);

    const filterItem = (cateG) => {
        const updated = Menu.filter((llr) => {
            return llr.category === cateG;
        })
        setitem(updated);
    }
    
    return (
        <>
            
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                <button className="btn btn-warning" onClick={() => filterItem('breakfast')}> Breakfast </button>
                <button className="btn btn-warning" onClick={() => filterItem('lunch')}> Lunch </button>
                <button className="btn btn-warning" onClick={() => filterItem('evening')}> Evenign </button>
                <button className="btn btn-warning" onClick={() => filterItem('dinner')}> Dinner </button>
                <button className="btn btn-warning" onClick={() => setitem(Menu)}> All </button>
                </div>
            </div>

            <Mainmenu item={item}/>

        </>
    );
};

export default Gallery;