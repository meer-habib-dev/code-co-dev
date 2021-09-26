import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Staff from '../Staff/Staff';
import './Coders.css'
const Coders = () => {

    const [staffs, setStaffs] = useState([]);
    const [cart, setCart] = useState([]);
    const [dobule, setDobule] = useState();

    useEffect(() => {
        setDobule(false);
    },[])

    useEffect(() => {
        fetch('./coders.json')
            .then(res => res.json())
            .then(data => setStaffs(data));
            
    }, []);
    
    const handleClick = (staff,disable) => {
        const newAdd = [...cart, staff];
        setCart(newAdd);
        disable = false
        console.log(disable)
    }

    return (
        <div className='coders-container'>
            <div>

            </div>
            <div>

            <section>
                    <h1>Find all the developer</h1>
                <div className="staff-container">
                    {
                        staffs.map(staff => <Staff key={staff.id} staff={staff} handleClick={handleClick} disable={dobule}></Staff> )
                 }   
                </div>
            </section>
            </div>
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Coders;