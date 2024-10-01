import React, { useState } from 'react';

const ConnectWallet = ({ onConnect }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.martian) {
      const accountInfo = await window.martian.connect();
      setAccount(accountInfo.address);
      onConnect(accountInfo.address);
    } else {
      alert('Please install Martian wallet extension!');
    }
  };

  return (
    <div className="container my-5">
      <h3>Connect Your Wallet</h3>
      {account ? (
        <p className="lead">Connected Wallet: {account}</p>
      ) : (
        <button className="btn btn-primary" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
