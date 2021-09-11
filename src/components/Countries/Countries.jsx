import React from 'react';
import './Countries.scss';
import { Country } from '../Country';

export const Countries = ({ countries }) => {
  return (
    <ul className="countries">
      {
        countries.map(country => (
          <li key={country.code}>
            <Country {...country} />
          </li>
        ))
      }
    </ul>
  )
};
