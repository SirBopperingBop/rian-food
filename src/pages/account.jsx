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

const Account = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Account
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="list-pages margin-pages">
				<div className="background-circle">
					<div className="container">
						<div className="background-white border-radius padding-box-middle box-shadow">
							<div className="row row-no-margin-bottom">
								<div className="col-60">
									<div className="float-left margin-right-small">
										<img className="people" src="images/author.jpg" alt=""/>
									</div>
									<div className="overflow-hidden">
										<h6>John Doe</h6>
										<p>@johndoe97</p>
									</div>
								</div>
								<div className="col-40">
									<button className="buttons float-right letter-spacing margin-top-small">$ 650</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="separator-small"></div>
				<div className="container">
					<ul>
						<li>
							<a className="border-radius box-shadow" href="/deposit/">
								<span className="margin-right-small icon-small icon-color-purple"><i className="fa fa-wallet"></i></span> Deposit <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/history/">
								<span className="margin-right-small icon-small icon-color-red"><i className="fa fa-history"></i></span> History <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/notification/">
								<span className="margin-right-small icon-small icon-color-purple"><i className="fa fa-bell"></i></span> Notification <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/livechat/">
								<span className="margin-right-small icon-small icon-color-green"><i className="fa fa-comments"></i></span> Live Chat <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/about-us/">
								<span className="margin-right-small icon-small icon-color-lime"><i className="fa fa-star"></i></span> About us <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/contact-us/">
								<span className="margin-right-small icon-small icon-color-green"><i className="fa fa-envelope"></i></span> Contact us <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/logout/">
								<span className="margin-right-small icon-small icon-color-orange"><i className="fa fa-power-off"></i></span> Logout <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
					</ul>
				</div>
				<div className="separator"></div>
			</div>
		</div>
	</Page>
);
export default Account;