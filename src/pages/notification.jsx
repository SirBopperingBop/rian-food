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

const Notification = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Notification
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="notification-pages margin-pages">
				<div className="container">
					<a href="/notification-details/">
						<div className="background-white border-radius box-shadow padding-box">
							<div className="float-left">
								<div className="icon-big icon-color-green margin-right">
									<i className="fa fa-redo"></i>
								</div>
							</div>
							<div className="overflow-hidden">
								<h5 className="margin-bottom-5px">Transfer Success</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</a>
					<div className="separator-small"></div>
					<a href="/notification-details/">
						<div className="background-white border-radius box-shadow padding-box">
							<div className="float-left">
								<div className="icon-big icon-color-red margin-right">
									<i className="fa fa-ticket-alt"></i>
								</div>
							</div>
							<div className="overflow-hidden">
								<h5 className="margin-bottom-5px">Ticket Zoo nearly gone</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</a>
					<div className="separator-small"></div>
					<a href="/notification-details/">
						<div className="background-white border-radius box-shadow padding-box">
							<div className="float-left">
								<div className="icon-big icon-color-yellow margin-right">
									<i className="fa fa-lightbulb"></i>
								</div>
							</div>
							<div className="overflow-hidden">
								<h5 className="margin-bottom-5px">Electricity Disocunt 5%</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</a>
					<div className="separator-small"></div>
					<a href="/notification-details/">
						<div className="background-white border-radius box-shadow padding-box">
							<div className="float-left">
								<div className="icon-big icon-color-purple margin-right">
									<i className="fa fa-calendar-alt"></i>
								</div>
							</div>
							<div className="overflow-hidden">
								<h5 className="margin-bottom-5px">Coming soon events</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</a>
					<div className="separator-small"></div>
					<a href="/notification-details/">
						<div className="background-white border-radius box-shadow padding-box">
							<div className="float-left">
								<div className="icon-big icon-color-lime margin-right">
									<i className="fa fa-gift"></i>
								</div>
							</div>
							<div className="overflow-hidden">
								<h5 className="margin-bottom-5px">Voucher Cashback 4%</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</a>
					<div className="separator-small"></div>
					<a href="/notification-details/">
						<div className="background-white border-radius box-shadow padding-box">
							<div className="float-left">
								<div className="icon-big icon-color-pink margin-right">
									<i className="fa fa-cog"></i>
								</div>
							</div>
							<div className="overflow-hidden">
								<h5 className="margin-bottom-5px">Internet Maintenance</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</a>
					<div className="separator"></div>
				</div>
			</div>
		</div>
	</Page>
);
export default Notification;