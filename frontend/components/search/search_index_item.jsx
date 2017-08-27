import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = ({ doc }) => {
  return (
    <li className="index-item">
      {`${doc.first_name} ${doc.last_name}, ${doc.degree}`}
      {`${doc.specialties[0]}`}
      {`${doc.lat}, ${doc.lng}`}

      <div></div>
    </li>
  );
};


export default SearchIndexItem;
