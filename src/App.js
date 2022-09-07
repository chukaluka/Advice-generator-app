import React from 'react';
import mobiSvg from './images/pattern-divider-mobile.svg';
import Dice from './components/Dice.js';

import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [id,setId] = useState('');

  const [quote,setQuote] = useState('');

  const onClick = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      const id = res.data.slip.id
      console.log(res.data.slip.advice, id)
      setQuote(res.data.slip.advice)
      setId(id)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
 <div className='wrapper items-center px-6 pt-6 pb-9 h-auto my-36 mx-7 rounded-lg md:w-1/2 md:ml-52 md:mx-auto lg:mx-auto xl:mx-auto'>

  <h1 className='wrapper-h1 flex justify-center items-center'>
    Advice #{id}
  </h1>

  { quote ? <p className='wrapper-p flex justify-center items-center pt-9'>
  {quote}
  </p> : null }

<img className='p-7 mx-auto' src={mobiSvg} alt="mobileSvg"/>

<Dice onClick={onClick} />




 </div>
  )
}

export default App