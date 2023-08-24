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

const Electricity = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Electricity
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="electricity margin-pages2">
				<div className="container">
					<h5 className="margin-bottom-small">ID Number Electricity</h5>
					<div className="background-white border-radius box-shadow">

						<form action="#">
							<input type="number" placeholder="0293000892902020" />
						</form>
					</div>
					<div className="grid grid-cols-2 grid-gap margin-bottom-small">
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center">
								<h6>$25</h6>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center border-active">
								<h6>$50</h6>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center">
								<h6>$75</h6>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 grid-gap margin-bottom-small">
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center">
								<h6>$100</h6>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center">
								<h6>$125</h6>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center">
								<h6>$150</h6>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 grid-gap">
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center">
								<h6>$175</h6>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center">
								<h6>$200</h6>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-small text-center">
								<h6>$250</h6>
							</div>
						</div>
					</div>
					<button className="buttons buttons-full">Process</button>
					<div className="separator-small"></div>
				</div>
			</div>
		</div>
	</Page>
);
export default Electricity;