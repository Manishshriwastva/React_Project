import React, { useState } from 'react';
import Navv from '../../Layout/Navv';
import Footer from '../../Layout/Footer';

function Registerr() {
    
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [repassword,setRepassword] = useState('')

  function handleName(e){
    // console.log(e.target.value)
    setName(e.target.value)
  }

  function handleEmail(e){
    // console.log(e.target.value)
    setEmail(e.target.value)
  }

  function handlePassowrd(e){
    // console.log(e.target.value)
    setPassword(e.target.value)
  }

  function handleRepassword(e){
    // console.log(e.target.value)
    setRepassword(e.target.value)
  }
   
  function handleForm(e){
    e.preventDefault()
    console.log(`Name : ${name}`)
    console.log(`Email : ${email}`)
    console.log(`Password : ${password}`)
    console.log(`Repassword : ${repassword}`)

  }



  return (
    <>

    <Navv/> <br /> <br />
      
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='text-center'>
            <h1 className='text-center' style={{ color: 'skyblue' }}>Register Here</h1>
            <br />
          </div>
          <form onSubmit={handleForm} style={{backgroundColor:'#edf2f7',padding:'40px',marginBottom:'20px'}}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name</label>
              <input type='text' className='form-control' id='name' value={name} placeholder='Enter Your Name' onChange={handleName} />
            </div>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type='email' className='form-control' id='email' value={email} placeholder='Enter Your Email' onChange={handleEmail} />
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input type='password' className='form-control' id='password' value={password} placeholder='Enter Your Password' onChange={handlePassowrd} />
            </div>

            <div className='mb-3'>
              <label htmlFor='repassword' className='form-label'>Re-password</label>
              <input type='password' className='form-control' id='repassword' value={repassword} placeholder='Enter Your Repassword' onChange={handleRepassword} />
            </div>

            <button type='submit' className='btn btn-primary btn-block'>Submit</button>
          </form>
        </div>
      </div>
    </div>



      <Footer />
      
    </>
  );
}

export default Registerr;