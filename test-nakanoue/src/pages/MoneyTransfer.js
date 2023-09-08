import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function MoneyTransfer() {
    const navigate = useNavigate();
    const { userName } = useParams();
    const [transferAmount, setTransferAmount] = useState('');
    const balance = 10000000;
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = () => {
        const amount = parseFloat(transferAmount);

        if (amount >= 0 && amount <= balance) {
            navigate('/TransferSuccess');
        } else {
            setErrorMessage(`送金額は0以上かつ${balance}以下である必要があります。`);
        }
    }

    const handleAmountChange = (event) => {
        const amount = event.target.value;
        setTransferAmount(amount);
        setErrorMessage(''); // 送金額が変更されたらエラーメッセージをクリア
    }

    // 送金額が空の場合にボタンを無効にする条件
    const isButtonDisabled = transferAmount === '' || parseFloat(transferAmount) < 0 || parseFloat(transferAmount) > balance;

    return (
        <div className="App">
            <p>Money Transfer</p>
            <div className="recipient-info">
                <p>送金先</p>
                <p>{userName}</p>
                <p>送金上限額: {balance} 円</p>
            </div>
            <div className="amount-input">
                <label htmlFor="transfer-amount">送金額: </label>
                <input
                    type="number"
                    id="transfer-amount"
                    value={transferAmount}
                    onChange={handleAmountChange}
                    min="0"
                    max={balance}
                />
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button onClick={handleSubmit} disabled={isButtonDisabled}>送金</button>
        </div>
    );
}

export default MoneyTransfer;
