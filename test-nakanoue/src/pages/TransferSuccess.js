/* 送金成功画面 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css';
import humanPng2 from '../images/human2.png';
import humanPng3 from '../images/human3.png';
import humanPng4 from '../images/human4.png';

function SendTest() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    }

    return (
        <div className="App">
            <div className="header">
                <p>送金処理が成功しました</p>
            </div>
            <button onClick={handleSubmit}>トップ画面に戻る</button>
        </div>
    );
}

export default SendTest;
