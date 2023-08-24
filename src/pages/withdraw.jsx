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

const Withdraw = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Withdraw
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="withdraw margin-pages">
				<div className="container">
					<div className="background-circle">
						<div className="no-container">
							<div className="background-white border-radius padding-box-middle box-shadow">
								<div className="grid grid-cols-2 grid-gap grid grid-cols-2 grid-gap-no-margin-bottom">
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
					<h5 className="text-center margin-bottom-small">Amount $</h5>
					<div className="background-white border-radius box-shadow content">
		
						<form action="#">
							<input type="number"/>
						</form>
					</div>
					<div className="separator-small"></div>
					<h5 className="text-center margin-bottom-small">Withdraw to</h5>
					<div className="grid grid-cols-3 grid-gap margin-bottom">
						<div className="col">
							<div className="background-white border-radius box-shadow text-center padding-box border-active">
								<span className="icon-big icon-color-red">
									<i className="fa fa-university"></i>
								</span>
								<h6 className="font-weight-600">Bank</h6>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow text-center padding-box">
								<span className="icon-big fa-stack  icon-color-blue">
									<i className="fab fa-cc-paypal"></i>
								</span>
								<h6 className="font-weight-600">Paypal</h6>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow text-center padding-box">
								<span className="icon-big fa-stack icon-color-orange">
									<i className="fab fa-cc-stripe "></i>
								</span>
								<h6 className="font-weight-600">Stripe</h6>
							</div>
						</div>
					</div>
					<button className="buttons buttons-full margin-top-small box-shadow">Process</button>
				</div>
			</div>
		</div>
	</Page>
);
export default Withdraw;