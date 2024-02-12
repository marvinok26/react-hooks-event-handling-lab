import React from 'react';

function Keypad() {
 function handleInputChange(){
    console.log('Entering password...')
  };

    return (
      <div>
        <input type="password" onChange={handleInputChange} />
      </div>
    );
  
}

export default Keypad;