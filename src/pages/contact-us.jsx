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
import FollowUs from '../components/FollowUs';

const ContactUs = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Contact us
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="margin-pages">
				<div className="container">
					<div className="background-white border-radius box-shadow">
						<div className="padding-box">
							<form action="#" className="text-center">
								<input type="text" placeholder="Name" />
								<input type="email" placeholder="Email" />
								<textarea cols="30" rows="10">Your message</textarea>
								<button className="buttons margin-top-middle">Submit</button>
							</form>
						</div>
					</div>
					<div className="separator-small"></div>
				</div>
				<FollowUs></FollowUs>

				<div className="separator"></div>
			</div>
		</div>
	</Page>
);
export default ContactUs;