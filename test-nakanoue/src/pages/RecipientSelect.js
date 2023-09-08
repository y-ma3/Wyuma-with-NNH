/* 送金相手選択画面 */
import React, { useState } from 'react';
import { Link, useNavigate,useLocation  } from 'react-router-dom';

import '../App.css';
import humanPng2 from '../images/human2.png';
import humanPng3 from '../images/human3.png';
import humanPng4 from '../images/human4.png';
import humanPng5 from '../images/human5.png';
import humanPng6 from '../images/human6.png';


function SendTest() {
    const navigate = useNavigate();
    // const [selectedUserName, setSelectedUserName] = useState(null);
    const location = useLocation();
    const { balance } = location.state || {};
    console.log(balance)

    const users = [
        { id: 1, name: "TEST USER02", image: humanPng2 },
        { id: 2, name: "TEST USER03", image: humanPng3 },
        { id: 3, name: "TEST USER04", image: humanPng4 },
        { id: 4, name: "TEST USER05", image: humanPng5 },
        { id: 5, name: "TEST USER06", image: humanPng6 },
    ];

    const handleUserClick = (userId, userName) => {
        navigate(`/MoneyTransfer/${encodeURIComponent(userName)}`, { state: { balance } });
    };

    return (
        <div className="App">
            <div className="header">
                <p>送金相手を選択</p>
            </div>
            <div className="user-list">
                {users.map((user) => (
                    <div
                        className="user-item"
                        key={user.id}
                        // onClick={() => handleUserClick(user.id)}
                        onClick={() => handleUserClick(user.id, user.name)}
                    >
                        <img src={user.image} alt="picture" />
                        <p className="user-name">{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SendTest;
