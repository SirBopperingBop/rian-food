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

const Pages = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Pages
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="list-pages margin-pages">
				<div className="container">
					<ul>
						<li>
							<a className="border-radius box-shadow" href="/history/">
								<span className="margin-right-small icon-small icon-color-red"><i className="fa fa-history"></i></span> History <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/deposit/">
								<span className="margin-right-small icon-small icon-color-purple"><i className="fa fa-wallet"></i></span> Deposit <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/withdraw/">
								<span className="margin-right-small icon-small icon-color-blue"><i className="fa fa-arrow-alt-circle-down"></i></span> Withdraw <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/transfer/">
								<span className="margin-right-small icon-small icon-color-green"><i className="fa fa-redo"></i></span> Transfer <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/voucher/">
								<span className="margin-right-small icon-small icon-color-yellow"><i className="fa fa-gift"></i></span> Voucher <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/internet/">
								<span className="margin-right-small icon-small icon-color-orange"><i className="fa fa-wifi"></i></span> Internet <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/ticket/">
								<span className="margin-right-small icon-small icon-color-teal"><i className="fa fa-ticket-alt"></i></span> Ticket <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/events/">
								<span className="margin-right-small icon-small icon-color-pink"><i className="fa fa-calendar-alt"></i></span> Events <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/electricity/">
								<span className="margin-right-small icon-small icon-color-lime"><i className="fa fa-lightbulb"></i></span> Electricity <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/donation/">
								<span className="margin-right-small icon-small icon-color-red"><i className="fa fa-donate"></i></span> Donation <span className="float-right"><i className="fa fa-chevron-right"></i></span>
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
							<a className="border-radius box-shadow" href="/blog/">
								<span className="margin-right-small icon-small icon-color-yellow"><i className="fa fa-rss"></i></span> Blog <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/blog-single/">
								<span className="margin-right-small icon-small icon-color-orange"><i className="fa fa-file"></i></span> Blog Single <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/account/">
								<span className="margin-right-small icon-small icon-color-teal"><i className="fa fa-user"></i></span> Account <span className="float-right"><i className="fa fa-chevron-right"></i></span>
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
							<a className="border-radius box-shadow" href="/login/">
								<span className="margin-right-small icon-small icon-color-purple"><i className="fa fa-sign-in-alt"></i></span> Login <span className="float-right"><i className="fa fa-chevron-right"></i></span>
							</a>
						</li>
						<li>
							<a className="border-radius box-shadow" href="/register/">
								<span className="margin-right-small icon-small icon-color-blue"><i className="fa fa-user-plus"></i></span> Register <span className="float-right"><i className="fa fa-chevron-right"></i></span>
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
export default Pages;