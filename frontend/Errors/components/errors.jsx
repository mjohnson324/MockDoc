import React from 'react';

const Errors = ({ errors }) => {
    return(
      <ul className="error">
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
};

export default Errors;