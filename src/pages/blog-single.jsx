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

const BlogSingle = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Blog Single
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="blog margin-pages">
				<div className="container">
					<div className="background-white border-radius box-shadow">
						<img className="border-radius-top-left-right float-left margin-bottom-middle" src="images/blog3.jpg" alt=""/>
						<div className="padding-box">
							<h5 className="margin-bottom-5px"><a href="">Tomorroy internet discount 4%</a></h5>
							<div className="display-block margin-bottom-small"><span className="margin-right-middle"><i className="fa fa-calendar-alt"></i></span>21 January 2020</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem explicabo fugit ipsam nemo vitae suscipit maxime nisi quas, voluptate eaque repudiandae cupiditate ab reprehenderit, atque laborum tempore consequuntur laboriosam quaerat?</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit blanditiis eligendi rem eaque in impedit perspiciatis officia voluptate non distinctio fugiat veritatis reprehenderit at, aut similique fugit, dolores ipsum.</p>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white border-radius box-shadow padding-box-middle text-center">
						<h4 className="margin-bottom-small">Share on :</h4>
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
					<div className="separator-small"></div>
					<div className="background-white border-radius box-shadow padding-box-middle text-center">
						<h4 className="margin-bottom-small">Post Comments</h4>
						<form action="#">
							<input className="border-radius margin-bottom-middle" type="text" placeholder="Name"/>
							<input className="border-radius margin-bottom-middle" type="email" placeholder="Email"/>
							<textarea className="border-radius margin-bottom-middle" cols="30" rows="10">Your Comments</textarea>
							<button className="buttons box-shadow">Comments</button>
						</form>
					</div>
					<div className="separator"></div>
				</div>
			</div>
		</div>
	</Page>
);
export default BlogSingle;