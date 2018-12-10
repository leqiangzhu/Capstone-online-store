
import React from 'react';
import PropTypes from 'prop-types';


function SignInForm(props) {
 let _name = null;
 let _email = null;
 let _password = null;
 let _passwordConfirm = null;

  function handleSignInFormSubmission(event){
    console.log('handleSignInFormSubmission!!');
    console.log( _name);
    console.log(_name.value);
       
    event.preventDefault();
    props.onNewAccountCreation({
      name: _name.value,
      email: __email.value,
      password: _password.value,
      passwordConfirm: _passwordConfirm.value,
      
     
    });
    _name.value='';
    __email.value='';
    _password.value='';
    _price.value='';
    _passwordConfirm.value='';
    
  }
  return (
    <div>
      <style jsx>{`
             form {
                text-align: center;
                 
                font-size:40px;
                width:100px;
                background-color: white;
                border-radius: 4px !important;
                padding: 32px !important;
                padding-bottom: 24px !important;
                width: 441px !important;
                box-shadow: 0 16px 40px rgba(0,0,0,0.12) !important;
              //  margin: center;
            }
            input{
                display: table-cell !important;
                width: 100% !important;
                vertical-align: middle !important;
                border-radius: 4px;
                height: 46px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
      `}</style>
           
           
      {/* signin  */}
      <form onSubmit={handleSignInFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name' 
          ref={input => {
            _name = input;
          }}
        />
        <br></br>
        <input
          type='email'
          id='_email'
          placeholder='email' 
          ref={input => {
            __email = input;
          }} />
        <br></br>
        <input
          type='password'
          id='password'
          placeholder='password' 
          ref={input => {
            _password = input;
          }} />
        <br></br>
        <input
          type='password'
          id='passwordConfirm'
          placeholder='password' 
          ref={input => {
            _passwordConfirm = input;
          }} />
        <br></br>
               
        <button type='submit'>SUBMIT!</button>
      </form>
    </div>
  );
}
SignInForm.propTypes = {
  onNewAccountCreation: PropTypes.func
};
export default SignInForm;