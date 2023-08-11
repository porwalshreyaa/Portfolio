import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './common.css';

const Typing = () => {
    return (
        
      <TypeAnimation
        sequence={[
        
          'Ye Shreya Hai...',
          800, // wait 1s before replacing "Mice" with "Hamsters"
          'Ye Uska Intro Hai...',
          800,
          'Aur...',
          10,
          'Hamari Pawry Ho Rhi Hai!!!',
          800
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    
    );
  };


  export default Typing