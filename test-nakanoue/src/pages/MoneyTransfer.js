/* 送金画面 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MoneyTransfer() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/RecipientSelect');
    }

    return (
        <div className="App">
            <p>Money Transfer</p>
        </div>
    );
}

export default MoneyTransfer;
