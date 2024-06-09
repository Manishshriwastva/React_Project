import React from 'react';
import Layoutt from '../Layout/Layoutt';

function Contact(props) {
  return (
    <Layoutt>
        <div className='container'>
  <div className='row justify-content-center'>
    <div className='col-md-4'>
      <div className='text-center'>
        <h1 style={{color: 'skyblue'}}>Contact Form</h1>
      </div>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' className='form-control' id='name' placeholder='Enter Your Name' />
        </div> <br />
        
        <div className='form-group'>
          <label htmlFor='contactNumber'>Contact Number</label>
          <input type='number' className='form-control' id='contactNumber' placeholder='Enter Your Mobile Number' />
        </div> <br />
        
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' placeholder='Enter Your Email' />
        </div> <br />
        
        <div className='form-group'>
          <label htmlFor='message'>Enter Your Message</label>
          <input type='text' className='form-control' id='message' style={{height:'100px'}} placeholder='Enter Your Message' />
        </div> <br /> 
        
        <button type='submit' className='btn btn-success btn-block'>Submit</button>
      </form>
    </div>
  </div>
</div>

    </Layoutt>
  );
}

export default Contact;