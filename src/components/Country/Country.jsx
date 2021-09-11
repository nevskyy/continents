import React, { useState} from 'react';
import { Button } from '@material-ui/core';
import './Country.scss';
import { Languages } from '../Languages';

export const Country = ({ code, name, capital, languages }) => {

  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <>
       <div className="country">
        <div className="country__info">
          <img
            src={`https://www.countryflags.io/${code}/shiny/64.png`}
            alt={name}
            className="country__logo"
          />
          <div className="country__name">
            <h2>
              {name}
            </h2>
          </div>
        </div>
        <Button
            variant="outlined"
            className="country__button"
            onClick={() => setShowLanguages(!showLanguages)}

          >
            {!showLanguages ? 'Show Language' : 'Hide Language'}
          </Button>
      </div>
        {showLanguages && <Languages languages={languages} />}
    </>
   )
}