import React from 'react'
import './Card.css'
import Loki from '../../Loki_Resting.png'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img 
        src={Loki}
        alt='AAPL image'
        />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, nihil.</p>
    </div>
  )
}

export default Card