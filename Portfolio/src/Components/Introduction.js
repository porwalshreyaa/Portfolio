import React from 'react'
import Threescene from './Threescene'; // Update the path accordingly
import './common.css';
import Typing from './Typing';

const Introduction = () => {
  return (
    <section className='dance'>
      <h1><Typing/></h1>
      <Threescene/>
    </section>
    // <div style={{height:'90%', width:'100%', marginTop: '10%', marginRight: '0%', marginBottom: '0%', marginLeft: '0%', padding: '0', display: 'block' }}>Introduction (in progress)
    //  
    // </div>
    
  )
}


export default Introduction