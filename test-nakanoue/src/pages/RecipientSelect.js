/* 送金相手選択画面 */

import { Link, useNavigate } from 'react-router-dom';

import '../App.css';
import humanPng2 from '../images/human2.png';
import humanPng3 from '../images/human3.png';
import humanPng4 from '../images/human4.png';

function SendTest() {
    const navigate = useNavigate();
    const users = [
        { id: 1, name: "TEST USER02", image: humanPng2 },
        { id: 2, name: "TEST USER03", image: humanPng3 },
        { id: 3, name: "TEST USER04", image: humanPng4 },
    ];

    const handleUserClick = (userId) => {
        alert(`Clicked USER ${userId} `);
        navigate('/MoneyTransfer');
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
                        onClick={() => handleUserClick(user.id)}
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
