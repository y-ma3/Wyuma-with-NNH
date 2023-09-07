import { Link } from "react-router-dom";
import '../App.css';
import humanPng2 from '../images/human2.png';
import humanPng3 from '../images/human3.png';
import humanPng4 from '../images/human4.png';




function SendTest() {
    const users = [
        { id: 1, name: "TEST USER02", image: humanPng2 },
        { id: 2, name: "TEST USER03", image: humanPng3 },
        { id: 3, name: "TEST USER04", image: humanPng4 },
    ];
    return (
        <div className="App">
            <p>送金相手を選択</p>
            {users.map((user) => (
                <div className="flex" key={user.id}>
                    <img src={user.image} alt="picture" />
                    <p className="user-name">{user.name}</p>
                </div>
            ))}
        </div>
    );
}

export default SendTest;