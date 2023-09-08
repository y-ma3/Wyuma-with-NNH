import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MoneyTransfer() {
    const navigate = useNavigate();
    const [transferAmount, setTransferAmount] = useState('');
    const balance = 10000000;

    const handleSubmit = () => {
        const amount = parseFloat(transferAmount);

        if (amount >= 0 && amount <= balance) {
            navigate('/RecipientSelect');
        } else {
            alert('送金額は0以上かつ' + balance + '以下である必要があります。');
        }
    }

    const handleAmountChange = (event) => {
        const amount = event.target.value;
        setTransferAmount(amount);
    }

    // 送金額が空の場合にボタンを無効にする条件
    const isButtonDisabled = transferAmount === '' || parseFloat(transferAmount) < 0 || parseFloat(transferAmount) > balance;

    return (
        <div className="App">
            <p>Money Transfer</p>
            <div className="recipient-info">
                <p>送金先</p>
                <p>TEST USER01</p>
                <p>送金上限額: {balance} 円</p>
            </div>
            <div className="amount-input">
                <label htmlFor="transfer-amount">送金額:</label>
                <input
                    type="number"
                    id="transfer-amount"
                    value={transferAmount}
                    onChange={handleAmountChange}
                    min="0"
                    max={balance}
                />
            </div>
            <button onClick={handleSubmit} disabled={isButtonDisabled}>送金</button>
        </div>
    );
}


export default MoneyTransfer;
