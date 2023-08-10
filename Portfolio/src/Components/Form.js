import React, { useState, useRef } from 'react';

const Form = () => {
    const formRef = useRef(null);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxhvgnG4abzNPUsGO7DO41UN6YaqflOG1owCiipfvnAz5bd9pHgz5hCFTU4EbKZTztb1Q/exec";
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);

        try {
            const response = await fetch(scriptUrl, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('SUCCESSFULLY SUBMITTED');
                // You can reset the form or display a success message here
            } else {
                console.error('Submission failed:', response.status);
                // Handle error case
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error case
        } finally {
            setLoading(false);
        }
    };

    return (
        <form action="#" onSubmit={handleSubmit} method="POST" ref={formRef} name="google-sheet" className="contact-form">
            <div className="form-style">
                <input className='name' id='Name' required placeholder='Your Name' type='text'></input>
            </div>
            <div className="form-style">
                <input className='email' id='Email' required placeholder='youremail@something.com' type='email' ></input>
            </div>
            <div className="form-style">
                <textarea className='message' id='Message' required placeholder='Your Message'></textarea>
            </div>
            <div className="form-style">
                <input id="submit" type="submit" value="Submit" />
            </div>
        </form>
    );
}

export default Form;
