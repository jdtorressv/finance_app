import React from 'react'
import './Card.css'
import Loki from '../../Loki_Resting.png'

interface Props {
  // Define any props if needed
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
        <img 
        src={Loki}
        alt='AAPL image'
        />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, nihil.</p>
    </div>
  )
}

export default Card