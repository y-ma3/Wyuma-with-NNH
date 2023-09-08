/* 送金成功画面 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css';
import approvalPng from '../images/approval.png';

function SendTest() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    }

    return (
        <div className="App">
            <div className="header">
                <div style={{ paddingTop: '50px' }}>
                    <img
                        className="approval-icon"
                        src={approvalPng}
                        alt="picture"
                        style={{ width: '20%' }}
                    />
                </div>
                <p>送金処理が成功しました</p>
            </div>
            <button onClick={handleSubmit}>トップ画面に戻る</button>
        </div>
    );
}

export default SendTest;
