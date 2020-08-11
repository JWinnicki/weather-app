import React, {useState} from 'react';
import axios from '../../axios-weather';

import key from '../../api-key';


const App = () => {
  const [text, setText] = useState('');


  const onSubmitHandler = async (city, key) => {
    const response = await axios.get(`find?q=${city}&appid=${key}&units=metric`);
    console.log(response.data);
    const response2 = await axios.get(`weather?q=${city}&appid=${key}&units=metric`);
    console.log(response2.data);
  }

  return (
    <div>
      <input 
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='button' onClick={() => onSubmitHandler(text, key)}>Submit</button>
    </div>
  );
}

export default App;