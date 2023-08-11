import React from 'react';
import './Form.css';

const Form = () => {
   
     
    return (
        <form action="https://script.google.com/macros/s/AKfycbwf83WNB1VoCMkeecqweEBE1DdHuBVyLaHqHMkFIlL4uhDfZsQi7pKNbf81_8nYDf3k/exec" method="POST" name="google-sheet" className="contact-form">

            <div className="form-style">
                <input name="Name" className='name' id='Name' required placeholder='Your Name' type='text'></input>
            </div>
            <div className="form-style">
                <input className='email' name="Email" id='Email' required placeholder='youremail@something.com' type='email' ></input>
            </div>
            <div className="form-style">
                <textarea className='message' name='Message' id='Message' required placeholder='Your Message'></textarea>
            </div>
            <div className="form-style">
                <input id="submit" type="submit" value="Submit" />
            </div>
        </form>
    );
}

export default Form;
