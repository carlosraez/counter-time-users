import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import bbvaLogo from '../../assets/Logo_BBVA_PNG.png';
import { registerUser } from '../../actions/actions';
import { setError, removeError } from '../../actions/ui';

export const RegistrerScreen = () => {
	const dispatch = useDispatch();
	const { msgError } = useSelector(state => state.ui);

	const [formValues, handleInputChange] = useForm({
		email: '',
		name: '',
		password: '',
		password2: '',
	});
    
	const { email, password, password2, name } = formValues;
    
	const handleRegister = () => { 
		if (isFormValid()) {
			dispatch(registerUser(email, password, name));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError('Password should be at least 6 characters and match each other'));
			return false;
		} 
		dispatch(removeError());
		return true;
	};

	return (
		<div>
			<div className="auth__logoContainer">
				<img src={bbvaLogo} alt="BBVA-LOGO" className="card-img-top auth__brandLogo" />
			</div>
			{
				msgError && (
					<div className="alert alert-warning">
						{msgError}
					</div>
				)
			}
			<div className="mb-3">
				<label className="form-label">Name</label>
				<input 
					type="text" 
					onChange={handleInputChange} 
					className="form-control" 
					name="name" 
					placeholder="name" 
					autoComplete="off"
				/>
			</div>
			<div className ="mb-3">
				<label className="form-label">Email</label>
				<input 
					type="email" 
					onChange={handleInputChange} 
					className="form-control" 
					name="email" 
					placeholder="name@gmail.com"
					autoComplete="off"
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Password</label>
				<input 
					type="password" 
					onChange={handleInputChange} 
					className="form-control" 
					name="password" 
					placeholder="password" 
					autoComplete="off"
				/>
			</div>
			<div className="mb-3">
				<input 
					type="password" 
					onChange={handleInputChange} 
					className="form-control" 
					name="password2" 
					placeholder="repeat password" 
					autoComplete="off"
				/>
			</div>
			<div>
				<button 
					className="btn btn-outline-info button" 
					onClick={handleRegister}
				>
                    Register</button>
			</div>
			<div className="button__container-handleLogin">
				<Link to="/auth/login" className="button__handleLogin" >Already have and acount?</Link>
			</div>
		</div>
	);
};