import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Benefits of Using Our Platform</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <h4>Easy Pension Management</h4>
          <p>Effortlessly track and manage your pension payments with a few clicks.</p>
        </div>
        <div className="col-md-4">
          <h4>Secure Transactions</h4>
          <p>Your data and pension transactions are secured by blockchain technology.</p>
        </div>
        <div className="col-md-4">
          <h4>Instant Notifications</h4>
          <p>Get real-time updates about your pension status and payment schedules.</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
