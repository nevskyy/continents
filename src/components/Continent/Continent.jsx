import React, { useEffect, useState } from 'react';
import { getData } from '../../api/getData';
import { Button } from '@material-ui/core';
import './Continent.scss'
import { Countries } from '../Countries';
import { CallBackContext } from '../../context/CallBackContext';
import { Images } from '../Images';

const continentsImg = {
  'AF': Images[0],
  'AN': Images[1],
  'AS': Images[2],
  'EU': Images[3],
  'NA': Images[4],
  'OC': Images[5],
  'SA': Images[6],
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