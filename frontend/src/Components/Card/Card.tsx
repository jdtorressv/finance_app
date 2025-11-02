import React, { JSX } from 'react'
import './Card.css'
import Loki from '../../Loki_Resting.png'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
  id: string;
  searchResult: CompanySearch
  onPortfolioCreate: (e: React.SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : JSX.Element  => {
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
          {searchResult.exchangeFullName} - {searchResult.exchange}
        </p>
        <AddPortfolio 
          onPortfolioCreate={onPortfolioCreate} 
          symbol={searchResult.symbol}
        />
    </div>
  )
}

export default Card