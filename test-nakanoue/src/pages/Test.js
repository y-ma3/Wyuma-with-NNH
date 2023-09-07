import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import humanPng from '../images/human1.png';

function Test() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/TestSend');
    }

    return (
        <div className="App">
            <div className="flex">
                <img src={humanPng} alt="picture" />
                <p className="user-name">TEST USER01</p>
            </div>
            <p className="account-number">口座番号:10000000</p>
            <p className="account-balance">預金残高:1000000</p>
            <button type="submit" name="submitButton" onClick={handleSubmit}>submit</button><br/>
        </div>
    );
}

export default Test;
