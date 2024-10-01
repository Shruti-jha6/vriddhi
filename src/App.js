import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ConnectWallet from './components/ConnectWallet';
import PensionDashboard from './components/PensionDashboard';
import BenefitsSection from './components/BenefitsSection';
import HelpSection from './components/HelpSection';
import './App.css';  // Optional: For additional custom styling

function App() {
  const [account, setAccount] = useState(null);

  const handleWalletConnect = (address) => {
    setAccount(address);
  };

  return (
    <div className="App">
      <Navbar />
      
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to the Pension & Benefits DApp</h1>
        <p className="lead">Making pension management easy and secure for everyone</p>
      </header>
      
      <div className="container my-5">
        <ConnectWallet onConnect={handleWalletConnect} />
        {account && <PensionDashboard account={account} />}
      </div>

      <BenefitsSection />
      <HelpSection />
    </div>
  );
}

export default App;
