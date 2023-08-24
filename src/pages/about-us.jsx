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

const AboutUs = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				About us
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="about-us margin-pages">
				<div className="container">
					<div className="background-white border-radius box-shadow">
						<img className="border-radius-top-left-right float-left margin-bottom-middle" src="images/about-us.jpg" alt="" />
						<div className="padding-box">
							<h5 className="margin-bottom-small">About aStylers</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem explicabo fugit ipsam nemo vitae suscipit maxime nisi quas, voluptate eaque repudiandae cupiditate ab reprehenderit, atque laborum tempore consequuntur laboriosam quaerat?</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit blanditiis eligendi rem eaque in impedit perspiciatis officia voluptate non distinctio fugiat veritatis reprehenderit at, aut similique fugit, dolores ipsum.</p>
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
export default AboutUs;