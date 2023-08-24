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

const Events = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Events
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="events margin-pages">
				<div className="container">
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-small icon-color-green">
										<i className="fa fa-lightbulb"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Envato Meetup California</h6>
									<span>18 - 20 March 2020</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Register</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-small icon-color-blue">
										<i className="fa fa-laptop"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Web Design Conference</h6>
									<span>12 - 15 February 2020</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Register</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-small icon-color-lime">
										<i className="fa fa-calendar-alt"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Increase Business Quickly</h6>
									<span>15 - 19 January 2020</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Register</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-small icon-color-orange">
										<i className="fa fa-ticket-alt"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Export Import Workshop</h6>
									<span>20 - 23 March 2021</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Register</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-small icon-color-purple">
										<i className="fa fa-mobile"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Mobile Design Show 2020</h6>
									<span>19 - 23 March 2021</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Register</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-small icon-color-yellow">
										<i className="fa fa-mobile"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Gallery Samsung Mobile</h6>
									<span>19 - 23 April 2021</span>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Register</button>
							</div>
						</div>
					</div>
					<div className="separator"></div>
				</div>
			</div>
		</div>
	</Page>
);
export default Events;