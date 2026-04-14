import "./BodyContainer.css";

import React from 'react'

function BodyContainer({children}) {
  return (
    <div className="body-container">
        {children}
    </div>
  );
}

export default BodyContainer;