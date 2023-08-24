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

const Deposit = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Deposit
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="deposit margin-pages">
				<div className="container">
					<h5 className="text-center margin-bottom-small">Amount $</h5>
					<div className="background-white border-radius box-shadow content">
						<form action="#">
							<input type="number" />
						</form>
					</div>
					<div className="separator-small"></div>
					<h5 className="text-center margin-bottom-small">Pay with</h5>
					<div className="grid grid-cols-3 grid-gap">
						<div className="background-white border-radius box-shadow text-center padding-box">
							<span className="icon-big icon-color-red">
								<i className="fa fa-university"></i>
							</span>
							<h6 className="font-weight-600">Bank</h6>
						</div>
						<div className="background-white border-radius box-shadow text-center padding-box border-active">
							<span className="icon-big fa-stack  icon-color-blue">
								<i className="fab fa-cc-paypal"></i>
							</span>
							<h6 className="font-weight-600">Paypal</h6>
						</div>
						<div className="background-white border-radius box-shadow text-center padding-box">
							<span className="icon-big fa-stack icon-color-orange">
								<i className="fab fa-cc-stripe "></i>
							</span>
							<h6 className="font-weight-600">Stripe</h6>
						</div>
					</div>
					<button className="buttons buttons-full margin-top-small box-shadow">Process</button>
				</div>
			</div>
		</div>
	</Page>
);
export default Deposit;