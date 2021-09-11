import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Language } from '../Language';
import './Languages.scss'
import { CallBackContext } from '../../context/CallBackContext';


export const Languages = ({ languages }) => {

  const { setCountries, setFetchCountries } = useContext(CallBackContext)

  return (
    <ul className="languages">
      {
        languages.map(language => (
          <li key={language.name}>
            <Language {...language} />
          </li>
        ))
      }
      <Button
        variant="outlined"
        className="languages__button"
        onClick={() => {
          setCountries([])
          setFetchCountries(false)
        }}
      >
        CLOSE
      </Button>
    </ul>
  )
}
