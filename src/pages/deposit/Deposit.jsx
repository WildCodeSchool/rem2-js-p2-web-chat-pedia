import React from 'react';
import CatSleep from '../../assets/cat-sleep.png'
import './Deposit.css';

const Deposit = () => {
    return (
        <div className='Deposit'>
            <h1>Dépôt de ressources</h1>
            <h2>[ Chat-pitre en cours de construction ]</h2>
            <div className="animate__animated animate__zoomIn">
                <img src={CatSleep} alt="chat endormi"/>
            </div>
        </div>
    )
}

export default Deposit
