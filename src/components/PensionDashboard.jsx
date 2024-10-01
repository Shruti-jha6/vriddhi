import React, { useState, useEffect } from 'react';

const PensionDashboard = ({ account }) => {
  const [pensionDetails, setPensionDetails] = useState(null);

  useEffect(() => {
    if (account) {
      // Fetch the pension data for the account
      fetchPensionDetails(account);
    }
  }, [account]);

  const fetchPensionDetails = async (account) => {
    try {
      // Dummy data for the sake of example, replace with actual API calls
      const data = {
        amount: "1000 USDT",
        lastPayment: "2024-09-30",
        nextPayment: "2024-10-30"
      };
      setPensionDetails(data);
    } catch (error) {
      console.error('Error fetching pension details:', error);
    }
  };

  const distributePension = async () => {
    // Add the logic for distributing pension here
    alert('Pension distribution initiated.');
  };

  return (
    <div className="container my-5">
      <h3>Pension Dashboard</h3>
      {pensionDetails ? (
        <div>
          <p><strong>Pension Amount:</strong> {pensionDetails.amount}</p>
          <p><strong>Last Payment Date:</strong> {pensionDetails.lastPayment}</p>
          <p><strong>Next Payment Date:</strong> {pensionDetails.nextPayment}</p>
          <button className="btn btn-success" onClick={distributePension}>
            Distribute Pension
          </button>
        </div>
      ) : (
        <p>No pension details available. Connect your wallet to view details.</p>
      )}
    </div>
  );
};

export default PensionDashboard;
