"use client"
import React,{useState} from 'react'
import './Login.css'
import {Register, login} from '../../actions/auth';
const Login = () => {

	const [formData,setFormData] = useState({
		RegisteredEmail:'',
		RegisteredPassword:''
	});
	const {RegisteredEmail,RegisteredPassword} =formData;
	const onChange =(e:any) =>
		setFormData({...formData,[e.target.name]: e.target.value});

	const onSubmitLogin =(e: any) =>{
		e.preventDefault();
		console.log(RegisteredEmail,RegisteredPassword);
		login(RegisteredEmail,RegisteredPassword);
	}

	const [form2Data,setForm2Data] = useState({
		name:'',
		email:'',
		password:''
	});

	const {name,email,password} =form2Data;

	const onChangeRegister =(e: any) =>{
		setForm2Data({...form2Data,[e.target.name]: e.target.value});
	}
	const onSubmitRegister =(e: any) =>{
		e.preventDefault();
		Register(name,email,password);
	}



	const handleUseClientClick = async() => {
			const signUpButton: HTMLElement | null = document.getElementById('signUp');
			const signInButton: HTMLElement | null = document.getElementById('signIn');
			const container: HTMLElement | null = document.getElementById('container');
		
				signUpButton?.addEventListener("click", () => {
					container?.classList.add("right-panel-active");
				});
		
				signInButton?.addEventListener("click", () => {
					container?.classList.remove("right-panel-active");
				});
    };
	
  return (
<>
<head>
    <title>Document</title>
	
</head>
<body>
    <div className="container" id="container">
	<div className="form-container sign-up-container">
		<form action="#" onSubmit={onSubmitRegister}>
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" name="name" value={name} onChange={onChangeRegister} required/>
			<input type="email" placeholder="Email"name="email" value={email} onChange={onChangeRegister} required/>
			<input type="password" placeholder="Password" name="password" value={password} onChange={onChangeRegister} required/>
			<button>Sign Up</button>
		</form>
	</div>

	<div className="form-container sign-in-container">
		<form onSubmit = {onSubmitLogin}>
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" name="RegisteredEmail" value={RegisteredEmail} onChange={onChange} required/>
			<input type="password" placeholder="Password" name="RegisteredPassword" value={RegisteredPassword} onChange={onChange} required/>
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={handleUseClientClick}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={handleUseClientClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
</body>
</>
  )
}

export default Login