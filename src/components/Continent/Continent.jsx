import React, { useEffect, useState } from 'react';
import { getData } from '../../api/getData';
import { Button } from '@material-ui/core';
import './Continent.scss'
import { Countries } from '../Countries';
import { CallBackContext } from '../../context/CallBackContext';


const continentsImg = {
  'AF': '../../../continentsImgs/Africa.png',
  'AN': '../../../continentsImgs/Antarctica.png',
  'AS': '../../../continentsImgs/Asia.png',
  'EU': '../../../continentsImgs/Europe.png',
  'NA': '../../../continentsImgs/NorthAmerica.png',
  'OC': '../../../continentsImgs/Oceania.png',
  'SA': '../../../continentsImgs/SouthAmerica.png',
}

export const Continent = ({ name, code }) => {

  const [countries, setCountries] = useState([]);
  const [fetchCountries, setFetchCountries] = useState(false);

  useEffect(() => {
    if (fetchCountries) {
      const query = `{
        continents (filter: { code: { eq: "${code}" } }) {
          countries {
            name
            code
            capital
            languages {
              name
            }
          }
        }
      }`
      getData(query)
        .then(res => {
          setCountries(res.continents[0].countries)
        })
    } else {
      setCountries([])
    }
  }, [fetchCountries, code])

  return (
    <>
      <div className="continent">
        <div className="continent__info">
          <img src={continentsImg[code]} alt={name} className="continent__logo" />
          <h2 className="continent__name">{name}</h2>
        </div>
        <Button
          variant="outlined"
          className="continent__button"
          onClick={() => setFetchCountries(!fetchCountries)}
        >
         { !countries.length ? 'Show Countries' : 'Hide Countries'}
        </Button>
      </div>
      {
        !!countries.length && (
          <CallBackContext.Provider
            value={{ setCountries, setFetchCountries }}
          >
            <Countries countries={countries} />
          </CallBackContext.Provider>
        )
      }
    </>
  )
}