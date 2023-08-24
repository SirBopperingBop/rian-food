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

const Internet = () => (
	<Page name="home">
		<Navbar className="navbar navbar-page">
			<NavLeft>
				<Link back backLink="Back"><i className="fa fa-chevron-left"></i></Link>
			</NavLeft>
			<NavTitle>
				Internet
			</NavTitle>
		</Navbar>
		<div className="page-content">
			<div className="internet margin-pages2">
				<div className="container">
					<h5 className="margin-bottom-small">ID Number <span className="color-primer">Fast Net</span></h5>
					<div className="background-white border-radius box-shadow">

						<form action="#">
							<input type="number" placeholder="0293000892902020" />
							<button className="buttons">Check</button>
						</form>
					</div>
					<h5 className="margin-bottom-small">Choose Internet Provider</h5>
					<div className="grid grid-cols-1 grid-gap">
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-orange">
										<i className="fa fa-bolt"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Bolt Net Home</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box border-active">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-purple">
										<i className="fa fa-tachometer-alt"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Fast Net</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-lime">
										<i className="fa fa-fan"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Palapa Net Service</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-red">
										<i className="fa fa-shipping-fast"></i>
									</span>
								</div>
								<div className="overflow-hidden text">BusNet Network</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-blue">
										<i className="fa fa-rocket"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Jet Network Net</div>
							</div>
						</div>
						<div className="col">
							<div className="background-white border-radius box-shadow padding-box">
								<div className="float-left margin-right margin-left-small">
									<span className="icon-big icon-color-pink">
										<i className="fa fa-paper-plane"></i>
									</span>
								</div>
								<div className="overflow-hidden text">Net Not Net</div>
							</div>
						</div>
					</div>
					<div className="separator-small"></div>
				</div>
			</div>
		</div>
	</Page>
);
export default Internet;