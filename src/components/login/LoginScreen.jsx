import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    
    const action = {
      type: types.login,
      payload: {
        name: 'Julian',
        logged: true
      }
    }
    dispatch(action);
    localStorage.setItem("user", JSON.stringify(action.payload));
    //el replace es para que no pueda volver por el historial porque estas loggeado
    navigate('/marvel', {
      replace: true
    });
  }

  return (
    <div className='container mt-5'>
        <h1>Login Screen</h1>
        <hr />
        <button className='btn btn-primary' onClick={handleLogin}>
          Login
        </button>
    </div>
  )
}
