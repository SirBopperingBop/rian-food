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

const Ticket = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Tickets
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="ticket margin-pages">
				<div className="container">
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-lime">
										<i className="fa fa-crow"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>San Diego Zoo Animals <span className="color-primer">$30</span></h6>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Buy</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-purple">
										<i className="fa fa-swimmer"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Swimming Pool Madrid <span className="color-primer">$35</span></h6>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Buy</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-green">
										<i className="fa fa-fighter-jet"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>California Army Museum <span className="color-primer">$54</span></h6>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Buy</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-orange">
										<i className="fa fa-university"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Art and performance hall <span className="color-primer">$12</span></h6>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Buy</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-red">
										<i className="fas fa-fish"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Paris catfish fishing pool <span className="color-primer">$27</span></h6>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Buy</button>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
					<div className="background-white box-shadow border-radius padding-box-middle">
						<div className="grid grid-cols-2 grid-gap">
							<div className="col-70">
								<div className="float-left margin-right-middle">
									<span className="icon-big icon-color-teel">
										<i className="fa fa-swimming-pool"></i>
									</span>
								</div>
								<div className="overflow-hidden">
									<h6>Swimming Pool Everton <span className="color-primer">$30</span></h6>
								</div>
							</div>
							<div className="col-30">
								<button className="buttons box-shadow">Buy</button>
							</div>
						</div>
					</div>
					<div className="separator"></div>
				</div>
			</div>
		</div>
	</Page>
);
export default Ticket;