import React from 'react';
import Layoutt from '../Layout/Layoutt';

function Contact(props) {
  return (
    <Layoutt>
        <div className='text-center'>
          <h1 style={{color:'skyblue'}}> Contact Form </h1>
        <form action="">
           
           <label htmlFor="">Name</label>
           <input type="text" name=""  placeholder='Enter Your Name' /> <br /><br />
            
           <label htmlFor="">Contact Number</label>
           <input type="number" name=""  placeholder='Enter Your Mobile Number' /> <br /><br />

           <label htmlFor="">Email</label>
           <input type="email" name=""  placeholder='Enter Your Email' /> <br /><br />

           <label htmlFor="">Enetr Your Message</label>
           <input type="text" name=""  placeholder='Enter Your Message' /> <br /><br />

           <button className='btn btn-success'>Sumbit</button>

        </form>
        </div>
    </Layoutt>
  );
}

export default Contact;