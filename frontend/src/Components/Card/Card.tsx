import React, { JSX } from 'react'
import './Card.css'
import Loki from '../../Loki_Resting.png'
import { CompanySearch } from '../../company';

interface Props {
  id: string;
  searchResult: CompanySearch
}

const Card: React.FC<Props> = ({id, searchResult}: Props) : JSX.Element  => {
  return (
    <div className='card'>
        <img 
        src={Loki}
        alt='Company Logo'
        />
        <div className='details'>
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>${searchResult.currency}</p>
        </div>
        <p className='info'>
          {searchResult.exchangeFullName} - {searchResult.Exchange}
        </p>
    </div>
  )
}

export default Card