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
      
      <div className='text-center'>
        
      <h1 className='text-center'style={{color:'blue'}}>Regester Here </h1> <br />

<form action="" onSubmit={handleForm}>
<label htmlFor="">Name</label>
  <input type="text" value={name} placeholder='Enter Your Name' onChange={handleName}/> <br /> <br />

  <label htmlFor="">Email</label>
  <input type="text" value={email} placeholder='Enter Your Email' onChange={handleEmail} /> <br /> <br />

  <label htmlFor="">Password</label>
  <input type="text" value={password} placeholder='Enter Your Password' onChange={handlePassowrd} /> <br /> <br />

  <label htmlFor="">Re-password</label>
  <input type="text" value={repassword} placeholder='Enter Your Repassword' onChange={handleRepassword} />  <br /><br />

  <button className='btn btn-success'>Submit</button>
</form>
      </div>

      <Footer/>
      
    </>
  );
}

export default Registerr;