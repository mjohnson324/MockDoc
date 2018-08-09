import React from 'react';

export const Loading = () => {
    return(
        <p className="loading">Loading...</p>
    );
};

export const NoResultsFound = () => {
    return(
        <p className="no=results">Hmm, looks like there are not any doctors with that specialty here. Try another query!</p>
    );
};

export const Errors = ({ errors }) => {
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