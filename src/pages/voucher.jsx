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

const Voucher = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Voucher
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="voucher margin-pages">
				<div className="container">
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-yellow">
										<i className="fa fa-lightbulb"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h5>Electricity discount 20%</h5>
									<span>Untill: 20 March 2020</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Claim</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-blue">
										<i className="fa fa-wifi"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h5>Internet Cashback 8%</h5>
									<span>Untill: 15 February 2020</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Claim</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-green">
										<i className="fa fa-calendar-alt"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h5>Envato Events Disocunt 50%</h5>
									<span>Untill: 19 January 2020</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Claim</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-orange">
										<i className="fa fa-ticket-alt"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h5>Ticket Zoo Camel Discount 5%</h5>
									<span>Untill: 23 March 2021</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Claim</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-purple">
										<i className="fa fa-calendar-alt"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h5>UI/UX Design Meetup Free</h5>
									<span>Untill: 23 March 2021</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Claim</button>
							</div>
						</div>
					</div>
					<div className="separator"></div>
				</div>
			</div>
		</div>
	</Page>
);
export default Voucher;