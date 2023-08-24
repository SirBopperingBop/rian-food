import React from 'react';
import {
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

const Register = () => (
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
						<input type="text" placeholder="Email/username"/>
						<input type="password" placeholder="Password"/>
						<p className="text-center margin-bottom-middle">Have an account? <a href="">Login Now</a></p>
						<button className="buttons buttons-center buttons-full box-shadow">Register</button>
					</form>
				</div>
				<div className="separator-small"></div>
				<div className="container margin-bottom">
					<div className="text-center">
						<h5 className="margin-bottom-small">Register with</h5>
						<ul>
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
							<li>
								<a href=""><span className="icon-small icon-width socmed-bg-google color-white">
									<i className="fab fa-google"></i>
								</span></a>
							</li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>
	</Page>
);
export default Register;