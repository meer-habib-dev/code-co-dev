import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let itemAdd = 0;
    let totalSalary = 0;
    let name = [];
    
    // const totalSalary = cart.reduce((a, b) => a + b.salary, 0)
    for (const staff of cart) {
        itemAdd = itemAdd + 1;
        totalSalary = totalSalary + staff.salary;
        name.push(staff.name);

    }
    return (
        <div className='cart-container'>
            <h1>Total Salary Counter</h1>
            <div className="cart-info">
                <h3>Coder add: {itemAdd} </h3>
                <h3>Total Salary: {totalSalary} </h3>
                <ul>
                    {
                        name.map(name => <li>{name}</li>)
                   }
               </ul>
            </div>
        </div>
    );
};

export default Cart;