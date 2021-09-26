import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Staff.css'
const Staff = (props) => {
    
    const { name, image, age, skill, salary } = props.staff;
    let [double, setDouble] = useState();
    return (
        <div className='staff-container'>
            <div className="staff">
                <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className="staff-info">
                <h3>{name}</h3>
                    <div className='info'>
                        <p> <span>Age:</span> <span>{age}</span></p>
                <p> <span>Skill:</span> <span>{skill}</span></p>
                <p> <span>Salary:</span> <span>{salary}</span></p>
                </div>
          
                    <button onClick={() => {
                        props.handleClick(props.staff);
                        setDouble(true)
                    }} disabled = {double}    ><i class="fas fa-user"></i>  Add User</button>
            </div>
            </div>
        </div>
    );
};

export default Staff;