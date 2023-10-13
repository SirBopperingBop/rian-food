import React, { useState, useEffect } from 'react';
import {
	f7,
	Page,
	Navbar,
	NavLeft,
	NavTitle,
	NavTitleLarge,
	NavRight,
	Link,
	Toolbar,
	Block,
	BlockTitle,
	List,
	ListItem,
	Button
} from 'framework7-react';
import { supabase } from '../js/routes';

export async function userSignUp() {

	try {
		// TODO: add phone to dbase
		const { error } = await supabase
			.auth.signInWithOAuth({
				provider: 'google'
			})
		// CATCH ERROR
		if (error) {
			f7.dialog.alert(error.message);
			throw error;
		}
	} catch (error) {
		console.log(error.message)
	}
}

export async function userSignOut(supabase) {
	console.log('Signing Out');
	const { error } = await supabase.auth.signOut();
	localStorage.removeItem('user');
	console.log(error);
}

export async function getUserProfile(usr) {
	try {
		usr.id;
	} catch (error) {
		console.log('No user id found');
		return;
	}

	// GET USER PROFILE
	try {
		const { data: profile, error, status } = await supabase
			.from('profiles')
			.select("*")
			.eq('email', usr.email)
			.single()
		if (error || status == 406) {
			// IF NO USER IS FOUND SET BLANK USER INFO
			throw error;
		}
		if (profile) {
			// console.log('foo', profile);
			localStorage.setItem('user', JSON.stringify(profile));
			setUser(profile);
			/*
			let profileTmp = { ...usr };
			Object.entries(profile).map((item) => {
			  if (item[1]) {
				profileTmp[item[0]] = item[1];
			  }
			});
			// SET USER INFO
			setUsr({
			  ...profileTmp,
			  email: usr.email,
			  phone: (profile.phone != null ? profile.phone : ''),
			  bphone: (profile.bphone != null ? profile.bphone : ''),
			  dob: (profile.dob != '' ? [profile.dob] : null),
			});
			user = {
			  ...profileTmp,
			  email: usr.email,
			  phone: (profile.phone != null ? profile.phone : ''),
			  bphone: (profile.bphone != null ? profile.bphone : ''),
			  dob: (profile.dob != '' ? [profile.dob] : null),
			};
			setIsLogin(true);
			*/
		}
	} catch (error) {
		console.log(error.message)
	}
}

let userExp = null;
let setUserExp = null;

const Login = () => {

	const [isLogin, setIsLogin] = useState(true);
	const [password, setPassword] = useState('');
	const urlParams = new URLSearchParams(window.location.search);
	const queryUserEmail = urlParams.get('mail');
	const queryUserPasscode = urlParams.get('pass');
	const stripeSession = urlParams.get('session_id');
	const baseUrl = window.location.href.split('?')[0];
	const [forms, setForms] = useState([]);
	const [usr, setUsr] = useState({
		id: '',
		username: '',
		email: '',
		phone: '',
		balans: '',
		fname: '',
		lname: '',
		dob: '',
		gender: '',
		bname: '',
		bphone: '',
		avatar_url: '',
		bemail: '',
		baddress: '',
		bcity: '',
		bcountry: '',
		ctype: '',
		islocked: '',
		ret_stat: '',
		ret_stat_by: '',
		ret_stat_date: '',
		unlockcode: '',
	});

	useEffect(() => {
		if (queryUserEmail != '' && queryUserPasscode != '') {
			setUsr({ ...usr, email: queryUserEmail });
			setPassword(queryUserPasscode);
		}
	}, [queryUserPasscode])

	useEffect(() => {
		initGroupnames(forms);
	}, [forms])

	useEffect(() => {
		if (stripeSession) {
			// getStripeSesssion();
		}
	}, [stripeSession])

	function initGroupnames(forms) {
		console.log({ forms });
		f7.dialog.close();
		const groupNamesTmp = [];
		forms.map((item) => {
			if (item.group_name == '') {
				return;
			}
			if (!groupNamesTmp.includes(item.group_name)) {
				groupNamesTmp.push(item.group_name);
			}
		})
	}

	return (
		<Page name="home">
			<div className="page-content">
				<div className="login-register">
					<div className="link-closess">
						<a href="#" className="link back float-right">
							<i className="fa fa-times"></i>
						</a>
					</div>
					<div className="container">
						<h1 className="color-primer text-center">Jetpay</h1>
						<div className="separator"></div>
						<form action="#" className="margin-bottom">
							<input type="text" placeholder="Email/username" />
							<input type="password" placeholder="Password" />
							<p className="text-center margin-bottom-middle">Not have an account? <a href="">Register Now</a></p>
							<button className="buttons buttons-center buttons-full box-shadow">Login</button>
						</form>
					</div>
					<div className="separator-small"></div>
					<div className="container margin-bottom">
						<div className="text-center">
							<h5 className="margin-bottom-small">Login with</h5>
							<ul>
								{/* 
								<li>
									<a href=""><span className="icon-small icon-width socmed-bg-facebook color-white">
										<i className="fab fa-facebook-f"></i>
									</span></a>
								</li>
								<li>
									<a href=""><span className="icon-small icon-width socmed-bg-twitter color-white">
										<i className="fab fa-twitter"></i>
									</span></a>
								</li>
								<li>
									<a href=""><span className="icon-small icon-width socmed-bg-whatsapp color-white">
										<i className="fab fa-whatsapp"></i>
									</span></a>
								</li>
								*/}
								<li>
									<a href="" onClick={() => {
										userSignUp(supabase);
									}}><span className="icon-small icon-width socmed-bg-google color-white">
											<i className="fab fa-google"></i>
											Login with Google
										</span></a>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</Page>

	)
}
export default Login;