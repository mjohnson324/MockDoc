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