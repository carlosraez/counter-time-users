import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import bbvaLogo  from '../../assets/Logo_BBVA_PNG.png';
import { startLoginEmailPassword } from '../../actions/actions';
import { setError, removeError } from '../../actions/ui';

export const LoginScreen = () => {

	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.ui);
	const { msgError } = useSelector( state => state.ui );

	const [formValues, handleInputChange] = useForm({
		email:'',
		password:'',
	});
    
	const { email, password } = formValues;
    
	const handleLogin = (e) => { 
		e.preventDefault();
         
		if (isFormValid() ) {
			dispatch( startLoginEmailPassword(email, password) ); 
		}
	};

	const isFormValid = () => {
          
		if ( !validator.isEmail(email) ) {
			dispatch( setError('Email is not valid') );
      
			return false;
		} 
		else if ( password.length < 5 ) {
			dispatch( setError('Password should be at least 6 characters and match each other') );
           
			return false;
		} 
        
		dispatch( removeError() );
		return true;
	};

	return (
		<div>
			<div className="auth__logoContainer">
				<img src={bbvaLogo} alt="bbva-logo-brand" className="card-img-top auth__brandLogo" />
			</div>
			{
				msgError && (
					<div className="alert alert-warning">
						{msgError}
					</div>
				)
			}
			<div className ="mb-3">
				<label  className="form-label">Email</label>
				<input 
					type="email" 
					onChange={handleInputChange} 
					className="form-control" 
					name="email" 
					placeholder="email@gmail.com"
					autoComplete="off"
				/>
			</div>
			<div className="mb-3">
				<label  className="form-label">Password</label>
				<input 
					type="password" 
					onChange={handleInputChange} 
					className="form-control" 
					name="password" 
					placeholder="Writte your password" 
					autoComplete="off"
				/>
			</div>
			<div>
				<button 
					className="btn btn-outline-info button" 
					onClick={handleLogin}
					disabled={loading}
				>
           
                     Login </button>
			</div>
			<div className="button__container-handleLogin">
				<Link to="/auth/registrer" className="button__handleLogin" >Create New Account</Link>
			</div>
		</div>
	);
};