/* アカウント(ユーザ)画面 */

// import React from 'react';
import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import humanPng from '../images/human1.png';
import axios from 'axios';


function AccountOverview() {
    const navigate = useNavigate();
    const balance = 10000; //変数を取り扱うテスト用

    let [post, setPosts] = useState([]);
    let [data, setData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/bank/user?accountNumber=10000000')
            .then(response => {
                console.log('データがサーバーに送信されました:', response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('データの送信に失敗しました:', error);
            });
    }, [])

    const handleSubmit = () => {
        // navigate('/RecipientSelect');
        navigate('/RecipientSelect', { state: { balance } });
    }
    return (
        <div className="App">
            <div className="flex">
                {/* <img className="user-icon" src={humanPng} alt="picture" /> */}
                <img src={data.icon} alt="picture" />

                <p className="user-name">{data.name}</p>
            </div>
            <p className="account-number">口座番号:10000000</p>
            <div className="account-balance">
                <p>預金残高</p>
                <p>{data.balance} 円</p>
            </div>
            <div align="center">
                <button type="submit" name="submitButton" className="button_sendMoney" onClick={handleSubmit} >送金</button><br />
            </div>
        </div>
    );
}

export default AccountOverview;
