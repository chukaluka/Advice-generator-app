import React from 'react';
import icon from '../images/icon-dice.svg';

const Dice = ( {onClick} ) => {
  return (
<button onClick={onClick} className='dice-div rounded-full flex items-center justify-center mx-auto w-16 h-16 hover:bg-[#dcf5f5]'>
<img src={icon} alt="icon"/>
</button>
  )
}

export default Dice;