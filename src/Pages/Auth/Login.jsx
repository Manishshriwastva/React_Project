import React from 'react';
import Navv from '../../Layout/Navv';
import Footer from '../../Layout/Footer';

function Login(props) {
  return (
    <>

    <Navv/>

      <div className='container m-5' >
      <div className='row justify-content-center' >
        <div className='col-md-4' >
          <form className='text-center p-4 border rounded'style={{backgroundColor:'#edf2f7'}}>
            <h1 className='mb-4' style={{color: 'skyblue'}}>Login</h1>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>Username</label>
              <input type='text' className='form-control' id='username' placeholder='Enter Your User Name'/>
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input type='password' className='form-control' id='password' placeholder='Enter Your Password'/>
            </div>

            <button type='submit' className='btn btn-primary btn-block'>Login</button>
          </form>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default Login;