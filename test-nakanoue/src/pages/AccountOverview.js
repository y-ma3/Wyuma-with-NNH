/* アカウント(ユーザ)画面 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import humanPng from '../images/human1.png';

function AccountOverview() {
    const navigate = useNavigate();
    const balance = 10000000; //変数を取り扱うテスト用

    const handleSubmit = () => {
        navigate('/RecipientSelect');
    }

    return (
        <div className="App">
            <div className="flex">
                <img className="user-icon" src={humanPng} alt="picture" />
                <p className="user-name">TEST USER01</p>
            </div>
            <p className="account-number">口座番号:10000000</p>
            <div className="account-balance">
                <p>預金残高</p>
                <p>{balance} 円</p>
            </div>
            <div align="center">
                <button type="submit" name="submitButton" className="button_sendMoney" onClick={handleSubmit} >送金</button><br />
            </div>
        </div>
    );
}

export default AccountOverview;
