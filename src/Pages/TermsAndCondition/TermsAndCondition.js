import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
      <div>
        <h2>Terms and Condition</h2>
        <p>All accept the condition</p>
        <p>
            Back to: 
          <Link to="/register"> Register</Link>
        </p>
      </div>
    );
};

export default TermsAndCondition;